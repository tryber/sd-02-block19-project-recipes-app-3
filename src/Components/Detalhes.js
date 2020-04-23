import React, { useContext } from 'react';
import RecipesContext from '../Context';

// teste

const Detalhes = () => {
  const { foodDetail } = useContext(RecipesContext);
  console.log(foodDetail);
  return (<h1>Receitas</h1>);
};
export default Detalhes;
