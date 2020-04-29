import React, { useContext, useEffect } from 'react';
import DetailImage from '../Components/DetailImage';
import DetailsIngredients from '../Components/DetailsIngredients';
import Instructions from '../Components/Instructions';
import RecipesContext from '../Context';
import DetailsVideo from '../Components/DetailsVideo';
import Recommended from '../Components/Recommended';
import StartRecipe from '../Components/StartRecipe';

const DetailsPage = () => {
  const { foodDetail, foodObject, idSearch } = useContext(RecipesContext);
  const local = window.location.pathname.split('/')[3];
  console.log(local);
  const isMeal = `/lookup.php?i=${foodDetail}`;
  const isFood = foodObject.meals || foodObject.drinks;
  useEffect(() => {
    idSearch(isMeal);
  }, []);

  return (
    <div>{
      isFood ?
        <div>
          <DetailImage />
          <DetailsIngredients />
          <Instructions />
          <DetailsVideo />
          <Recommended />
          <StartRecipe />
        </div>
        : <p>Loading...</p>}
    </div>
  );
};
export default DetailsPage;
