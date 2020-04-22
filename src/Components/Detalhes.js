import React, { useContext } from 'react';
import RecipesContext from '../Context';

const Detalhes = () => {
  const { foodDetail } = useContext(RecipesContext);
  return (<h1>Receitas</h1>)
}
export default Detalhes;
