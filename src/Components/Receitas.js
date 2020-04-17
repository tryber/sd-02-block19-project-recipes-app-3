import React, { useEffect, useState, useContext } from 'react';
import RecipesContext from '../Context/';
import Footer from '../Components/Footer';

const Receitas = ({ history }) => {
  const { setDrinkOrMeal, fetchError, requestInitialPage } = useContext(RecipesContext);

  useEffect(() => {
    setDrinkOrMeal(history);
  }, [history.location.pathname]);
  console.log(requestInitialPage);
  return (
    fetchError ||
    <div>
      {requestInitialPage.map((food, index) => {
        const local = food.idDrink ? 'Drink' : 'Meal'
        console.log(food[`id${local}`])
        console.log(food[`str${local}`])
        return (
          index < 12 
          ? <div key={`details ${food[`str${local}`]}`}>
            <div>
              <img src={food[`str${local}Thumb`]} />
            </div>
            <p>{food.strCategory}</p>
            <p>{food[`str${local}`]}</p>
            <p></p>
          </div>
          : null
        )
      })}
      <Footer />
    </div>
  )
};

export default Receitas;
