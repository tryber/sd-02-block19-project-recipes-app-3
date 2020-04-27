import React, { useContext, useEffect } from 'react';
import DetailImage from '../Components/DetailImage';
import DetailsIngredients from '../Components/DetailsIngredients';
import RecipesContext from '../Context';

const DetailsPage = () => {
  const { foodDetail, foodObject, idSearch } = useContext(RecipesContext);
  const isMeal = `/lookup.php?i=${foodDetail}`;
  const isFood = foodObject.meals || foodObject.drinks
  useEffect(() => {
    idSearch(isMeal)
  }, [])

  return (
    <div>{
      isFood ?
        <div>
          <DetailImage />
          <DetailsIngredients />
          {/* <Instructions />
        <DetailsVideo />
        <Recommended />
        <StartRecipe /> */}
        </div>
        : <p>Loading...</p>}
    </div>
  );
};
export default DetailsPage;
