import React, { useContext, useEffect } from 'react';
import DetailImage from '../Components/DetailImage';
import DetailsIngredients from '../Components/DetailsIngredients';
import Instructions from '../Components/Instructions';
import RecipesContext from '../Context';
import DetailsVideo from '../Components/DetailsVideo';
import Recommended from '../Components/Recommended';
import StartRecipe from '../Components/StartRecipe';
import '../Styles/DetailsPage.css';

const DetailsPage = () => {
  const { foodDetail, foodObject, idSearch } = useContext(RecipesContext);
  const isFood = foodObject.meals || foodObject.drinks;
  const isMeal = `/lookup.php?i=${foodDetail}`;
  useEffect(() => {
    idSearch(isMeal);
  }, [foodDetail]);
  return (
    <div>{
      isFood ?
        <div className="containAllInfos">
          <div className="containAll">
            <DetailImage />
            <DetailsIngredients />
            <Instructions />
            <DetailsVideo />
          </div>
          <Recommended />
          <StartRecipe />
        </div>
        : <p>Loading...</p>}
    </div>
  );
};
export default DetailsPage;
