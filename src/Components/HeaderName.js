import React, { useContext } from 'react';
import RecipesContext from '../Context';

const HeaderName = () => {
  const { pageName } = useContext(RecipesContext);
  return (
    <h2 data-testid="page-title">{pageName}</h2>
  );
}

export default HeaderName;
