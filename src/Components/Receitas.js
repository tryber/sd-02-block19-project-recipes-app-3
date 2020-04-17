import React, { useEffect, useContext } from 'react';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from './Header';

const Receitas = ({ history: { location: { pathname } } }) => {
  const { setDrinkOrMeal, fetchError, requestInitialPage } = useContext(RecipesContext);

  useEffect(() => {
    setDrinkOrMeal(pathname);
  }, [pathname]);
  return (
    fetchError ||
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
  );
};

export default Receitas;
