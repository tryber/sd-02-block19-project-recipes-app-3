import React, { useEffect, useContext } from 'react';
import RecipesContext from '../Context/';
import Footer from '../Components/Footer';

const Receitas = ({ history }) => {
  const { setDrinkOrMeal, fetchError, requestInitialPage } = useContext(RecipesContext);

  useEffect(() => {
    setDrinkOrMeal(history);
  }, [history.location.pathname]);
  return (
    fetchError ||
    <div>
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
  );
};

export default Receitas;
