import React, { useContext, useEffect } from 'react';
import DetailImage from '../Components/DetailImage';
import RecipesContext from '../Context';

const DetailsPage = () => {
  const { foodDetail, idSearch } = useContext(RecipesContext);
  const isMeal = `/lookup.php?i=${foodDetail}`;
  useEffect(() => {
    idSearch(isMeal)
  }, [])

  return (
    <div>
      <DetailImage />
      {/* <DetailsIngredients />
      <Instructions />
      <DetailsVideo />
      <Recommended />
      <StartRecipe /> */}
    </div>
  );
};
export default DetailsPage;
