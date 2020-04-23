import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context';

const DetailsPage = () => {
  const { foodDetail, idSearch } = useContext(RecipesContext);
  const isMeal = window.location.href.includes('comidas')
    ? `/lookup.php?i=${foodDetail}`
    : `/lookup.php?iid=${foodDetail}`;

  useEffect(() => {
    idSearch(isMeal)
  }, [])

  return (
    <div>
      <DetailImage />
      <DetailsIngredients />
      <Instructions />
      <DetailsVideo />
      <Recommended />
      <StartRecipe />
    </div>
  );
};
export default DetailsPage;
