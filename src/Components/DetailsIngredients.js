import React, { useContext } from 'react';
import RecipesContext from '../Context/';

const DetailsIngredients = () => {
  const { foodObject } = useContext(RecipesContext);
  const isFood = foodObject.meals[0] || foodObject.drinks[0]
  console.log(isFood);
  const allDataFood = Object.keys(isFood).filter((food) => (
    food.includes('Ingredient')
    && isFood[food].split('').length > 1
    || food.includes('Measure')
    && isFood[food].split('').length > 1
  ));
  console.log(allDataFood);
  return (
    <div>
      <p>Teste</p>
      <p></p>
    </div>
  )
}

export default DetailsIngredients;
