import React, { useState, useEffect, useContext } from 'react';
import { apiReverse, resultsRandom } from '../Services/APIs';
import Carousel from 'react-multi-carousel';
import RecipesContext from '../Context';
import 'react-multi-carousel/lib/styles.css';
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
    items: 1,
    slidesToSlide: 1,
  }
};

const carouselRecommended = (requests) => {
  const type = requests[0].idMeal ? 'Meal' : 'Drink';
  return (
    <Carousel
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={responsive}
    >
      {requests.map((food, index) => (
        <div data-testid={`${index}-recomendation-card`}>
          <img
            className="To_Carousel"
            src={food[`str${type}Thumb`]}
            alt={food[`str${type}`]}
          />
          <p className="legend">{food[`str${type}`]}</p>
        </div>
      ))}
    </Carousel>
  );
}

const Recommended = () => {
  const { isRecipeStarted } = useContext(RecipesContext);
  const [randomRequests, setRandomRequests] = useState([]);
  const [failed, setFailed] = useState([]);
  const [isRequesting, setIsRequesting] = useState(true);

  const successRequest = (param) => {
    const condition = param.meals || param.drinks;
    setRandomRequests([...randomRequests, condition[0]]);
  }

  const failedRequest = ({ message }) => {
    setFailed(message);
    alert(failed);
  }

  useEffect(() => {
    if (randomRequests.length === 6) {
      setIsRequesting(false)

    }
    if (randomRequests.length < 6) {
      apiReverse(resultsRandom)
        .then(successRequest, failedRequest)
    }
  }, [randomRequests])

  return (
    <div hidden={isRecipeStarted}>
      <h4>Recomendadas</h4>
      {!isRequesting
        ? <div>
          {carouselRecommended(randomRequests)}
        </div>
        : <p>Loading...</p>}
    </div>
  );
}

export default Recommended;
