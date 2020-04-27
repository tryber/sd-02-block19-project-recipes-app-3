import React, { useContext } from 'react';
import RecipesContext from '../Context/';

const DetailsIngredients = () => {
  const { foodObject } = useContext(RecipesContext);
  console.log(foodObject);
  return (
    <p>Rodando</p>
  )
}

export default DetailsIngredients;
