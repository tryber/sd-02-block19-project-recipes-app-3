import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { apiReverse, resRdm } from '../Services/APIs';
import RecipesContext from '../Context';
import '../Styles/Recommended.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
};

const carouselRecommended = (requests, setFoodDetail, setRandomRequests, setIsRequesting) => {
  const type = requests[0].idMeal ? 'Meal' : 'Drink';
  const toDetailsPage = window.location.pathname.includes('comidas')
    ? '/receitas/bebidas' : '/receitas/comidas';
  return (
    <Carousel
      infinite
      removeArrowOnDeviceType={['tablet', 'mobile']}
      responsive={responsive}
    >
      {requests.map((food, index) => (
        <Link
          key={food[`id${type}`]}
          onClick={(() => {
            setFoodDetail(food[`id${type}`]);
            setRandomRequests([]);
            setIsRequesting(true);
          })}
          to={`${toDetailsPage}/${food[`id${type}`]}`}
        > <div data-testid={`${index}-recomendation-card`}>
          <img
            className="To_Carousel"
            src={food[`str${type}Thumb`]}
            alt={food[`str${type}`]}
          />
          <p className="legend">{food[`str${type}`]}</p>
        </div>
        </Link>
      ))}
    </Carousel>
  );
};

const Recommended = () => {
  const { isRecipeStarted, setFoodDetail } = useContext(RecipesContext);
  const [randomRequests, setRandomRequests] = useState([]);
  const [failed, setFailed] = useState([]);
  const [isRequesting, setIsRequesting] = useState(true);
  const successRequest = (param) => {
    const condition = param.meals || param.drinks;
    setRandomRequests([...randomRequests, condition[0]]);
  };
  const failedRequest = ({ message }) => {
    setFailed(message);
    alert(failed);
  };

  useEffect(() => {
    if (randomRequests.length === 6) {
      setIsRequesting(false);
    }
    if (randomRequests.length < 6) {
      apiReverse(resRdm)
        .then(successRequest, failedRequest);
    }
  }, [randomRequests, window.location.href]);

  return (
    <div hidden={isRecipeStarted}>
      <h4>Recomendadas</h4>
      {!isRequesting
        ? <div>
          {carouselRecommended(randomRequests, setFoodDetail, setRandomRequests, setIsRequesting)}
        </div> : <p>Loading...</p>}
    </div>
  );
};

export default Recommended;
