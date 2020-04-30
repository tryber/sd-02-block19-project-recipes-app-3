import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import RecipesContext from '../Context';

const inProgress = JSON.parse(localStorage.getItem('in-progress')) || [];

const insertLocalStorage = (isRecipeStarted, setIsRecipeStarted, foodDetail, setIsFinish) => {
  inProgress.includes(foodDetail)
    ? localStorage.setItem('in-progress', JSON.stringify([...inProgress, foodDetail]))
    : localStorage.setItem('in-progress', JSON.stringify([foodDetail]));
  setIsRecipeStarted(!isRecipeStarted);
  setIsFinish(true);
};

const redirectAndDone = (setIsRedirect, foodObject) => {
  const doneRecipes = JSON.parse(localStorage.getItem('done-recipes'));
  const mealsOrDrinks = foodObject.meals[0] || foodObject.drinks[0];
  const done = {
    ...mealsOrDrinks,
    doneDate: new Date(),
  }
  doneRecipes
    ? localStorage.setItem('done-recipes', JSON.stringify([...doneRecipes, done]))
    : localStorage.setItem('done-recipes', JSON.stringify([done]));

  return setIsRedirect(true);
};

const StartRecipe = () => {
  const { isRecipeStarted, setIsRecipeStarted, foodDetail, foodObject } = useContext(RecipesContext);
  const [isFinish, setIsFinish] = useState(false);
  const [isRedirect, setIsRedirect] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const receive = foodObject.meals || foodObject.drinks;
  const isFood = receive[0];
  const isIngredient = Object.keys(isFood).filter((food) => (
    food.includes('Ingredient') && isFood[food]
  ));

  const startOrEnd = inProgress.includes(foodDetail) ? 'Continuar Receita' : 'Iniciar Receita';
  if (isRedirect) return <Redirect to="/receitas-feitas" />
  return (
    <div>
      <button
        disabled={isRecipeStarted && JSON.parse(localStorage.getItem(foodDetail)).length + 1 !== isIngredient.length}
        type='button'
        onClick={() => !isFinish ? insertLocalStorage(isRecipeStarted, setIsRecipeStarted, foodDetail, setIsFinish) : redirectAndDone(setIsRedirect, foodObject)}
      >
        {!isFinish ? startOrEnd : 'Finalizar Receita'}
      </button>
    </div >
  )
}

export default StartRecipe;
