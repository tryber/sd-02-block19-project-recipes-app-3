import React, { useContext } from 'react';
import RecipesContext from '../Context';

const StartRecipe = () => {
  const { isRecipeStarted, setIsRecipeStarted } = useContext(RecipesContext);
  const startOrEnd = isRecipeStarted ? 'Finalizar Receita' : 'Iniciar Receita';
  return (
    <div>
      <button
        type='button'
        onClick={() => setIsRecipeStarted(!isRecipeStarted)}
      >
        {startOrEnd}
      </button>
    </div>
  )
}

export default StartRecipe;
