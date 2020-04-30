import React, { useEffect, useContext } from 'react';
import Receitas from './Receitas';
import RecipesContext from '../Context';

const ExplorarOrigem = () => {
  const { requestOrigin } = useContext(RecipesContext);
  useEffect(() => {
    requestOrigin('/list.php?a=list')
  }, []);

  return (
    <div>
      <Receitas />
    </div>
  );
};

export default ExplorarOrigem;
