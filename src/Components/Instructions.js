import React, { useContext } from 'react';
import RecipesContext from '../Context';

const Instructions = () => {
  const { foodObject } = useContext(RecipesContext);
  const receive = foodObject.meals || foodObject.drinks;
  const isFood = receive[0];
  return (
    <div>
      <h4>Instructions</h4>
      <p data-testid="instructions">
        {`${isFood.strInstructions}`}
      </p>
    </div>
  );
};

export default Instructions;
