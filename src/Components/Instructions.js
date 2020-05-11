import React, { useContext } from 'react';
import RecipesContext from '../Context';
import '../Styles/Instructions.css';

const Instructions = () => {
  const { foodObject } = useContext(RecipesContext);
  const receive = foodObject.meals || foodObject.drinks;
  const isFood = receive[0];
  return (
    <div className="containInstructions">
      <h4>Instructions</h4>
      <p
        className="textInstructions"
        data-testid="instructions"
      >
        {`${isFood.strInstructions}`}
      </p>
    </div>
  );
};

export default Instructions;
