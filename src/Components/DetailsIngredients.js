import React, { useContext } from 'react';
import RecipesContext from '../Context/';

const ingredientAndMeasure = (ingredientToShow, measureToShow, index) => (
  <div>
    <span data-testid={`${index}-ingredient-name`}>
      {ingredientToShow}
    </span>
    <span> || </span>
    <span data-testid={`${index}-ingredient-measure`}>
      {measureToShow}
    </span>
  </div>
);

const DetailsIngredients = () => {
  const { foodObject } = useContext(RecipesContext);
  const isFood = foodObject.meals[0] || foodObject.drinks[0];
  const isIngredient = Object.keys(isFood).filter((food) => (
    food.includes('Ingredient')
    && isFood[food].split('').length >= 1
  ));
  const isMeasure = Object.keys(isFood).filter((food) => (
    food.includes('Measure')
    && isFood[food].split('').length >= 1
  ));
  return (
    <div>
      {isIngredient
        ?
        <div>
          {isIngredient.map((ingredient, index) => {
            const ingredientToShow = isFood[ingredient];
            const measureToShow = isFood[isMeasure[index]];
            return (
              <div key={`${ingredient} and ${isMeasure[index]} to Recipe`}>
                {ingredientAndMeasure(ingredientToShow, measureToShow, index)}
              </div>
            );
          })}
        </div>
        : null
      }
    </div>
  );
};

export default DetailsIngredients;