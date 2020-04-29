import React, { useContext } from 'react';
import RecipesContext from '../Context';

const insertLocalStorage = (isRecipeStarted, setIsRecipeStarted, foodDetail) => {
  console.log(foodDetail);
  console.log(isRecipeStarted)
  const inProgress = JSON.parse(localStorage.getItem('in-progress'));
  inProgress
    ? localStorage.setItem('in-progress', JSON.stringify([...inProgress, foodDetail]))
    : localStorage.setItem('in-progress', JSON.stringify([foodDetail]));
  setIsRecipeStarted(!isRecipeStarted);
  console.log(isRecipeStarted);
  console.log(localStorage.getItem('in-progress'))
}

const StartRecipe = () => {
  const { isRecipeStarted, setIsRecipeStarted, foodDetail } = useContext(RecipesContext);
  const startOrEnd = isRecipeStarted ? 'Finalizar Receita' : 'Iniciar Receita';
  return (
    <div>
      <button
        type='button'
        onClick={() => insertLocalStorage(isRecipeStarted, setIsRecipeStarted, foodDetail)}
      >
        {startOrEnd}
      </button>
    </div>
  )
}

export default StartRecipe;
