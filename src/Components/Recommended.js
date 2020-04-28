import React, { useState, useEffect } from 'react';
import { apiReverse, resultsRandom } from '../Services/APIs';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const carouselRecommended = (requests) => {
  const type = requests[0].idMeal ? 'Meal' : 'Drink';
  return (
    <Carousel responsive={responsive}>
      {requests.map((food, index) => (
        <div data-testid={`${index}-recomendation-card`}>
          <img src={food[`str${type}Thumb`]} alt={food[`str${type}`]} />
          <p className="legend">{food[`str${type}`]}</p>
        </div>
      ))}
    </Carousel>
  );
}

const Recommended = () => {
  const [randomRequests, setRandomRequests] = useState([]);
  const [failed, setFailed] = useState([]);
  const [isRequesting, setIsRequesting] = useState(true);

  const successRequest = (param) => {
    const condition = param.meals[0] || param.drinks[0];
    setRandomRequests([...randomRequests, condition]);
    console.log(randomRequests)
  }

  const failedRequest = ({ message }) => {
    setFailed(message);
    alert(failed);
  }

  useEffect(() => {
    if (randomRequests.length === 6) {
      setIsRequesting(false)
      console.log(randomRequests);
    }
    if (randomRequests.length < 6) {
      apiReverse(resultsRandom)
        .then(successRequest, failedRequest)
    }
  }, [randomRequests])

  return (
    <div>
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
