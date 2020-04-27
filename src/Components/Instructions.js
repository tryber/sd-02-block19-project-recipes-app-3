import React, { useContext } from 'react';
import RecipesContext from '../Context';

const Instructions = () => {
  const { foodObject } = useContext(RecipesContext);
  const isFood = foodObject.meals[0] || foodObject.drinks[0];
  return (
    <div>
      <p data-testid="instructions">
        {`${isFood.strInstructions}`}
      </p>
    </div>
  );
};

export default Instructions;
