import React, { useEffect, useContext } from 'react';
import { resultsRandom } from '../Services/APIs';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from './Header';

const Receitas = () => {
  const { setDrinkOrMeal, fetchError, requestInitialPage, isFetching } = useContext(RecipesContext);

  useEffect(() => {
    setDrinkOrMeal(resultsRandom);
  }, [window.location.href]);

  return (
    !isFetching
      ? fetchError ||
      <div>
        <Header />
        {requestInitialPage.map((food, index) => {
          const local = food.idDrink ? 'Drink' : 'Meal';
          return (
            index < 12
              ? <div key={`details ${food[`str${local}`]}`}>
                <div>
                  <img
                    alt={`food ${food[`str${local}`]}`}
                    src={food[`str${local}Thumb`]}
                  />
                </div>
                <p>{food.strCategory}</p>
                <p>{food[`str${local}`]}</p>
              </div>
              : null
          );
        })}
        <Footer />
      </div>
      : <p>Loading</p>
  );
};

export default Receitas;
