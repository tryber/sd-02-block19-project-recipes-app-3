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
  const receive = foodObject.meals || foodObject.drinks;
  const isFood = receive[0];
  const isIngredient = Object.keys(isFood).filter((food) => (
    food.includes('Ingredient')
  ));
  const isMeasure = Object.keys(isFood).filter((food) => (
    food.includes('Measure')
  ));
  return (
    <div>
      {isIngredient
        && <div>
          <h4>Ingredients</h4>
          {isIngredient.map((ingredient, index) => {
            const ingredientToShow = isFood[ingredient];
            const measureToShow = isFood[isMeasure[index]];
            return (
              ingredientToShow
              && <div key={`${ingredient} and ${isMeasure[index]} to Recipe`}>
                {ingredientAndMeasure(ingredientToShow, measureToShow, index)}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default DetailsIngredients;
