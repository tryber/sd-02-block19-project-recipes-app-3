import React, { useContext } from 'react';
import RecipesContext from '../Context';
import FavoriteAndShare from './FavoriteAndShare';
import '../Styles/DetailsImage.css';

const DetailImage = () => {
  const { foodObject } = useContext(RecipesContext);
  const actualFood = foodObject.meals || foodObject.drinks;
  const unity = actualFood[0];
  const isMeal = window.location.href.includes('comidas')
    ? 'Meal' : 'Drink';
  return (
    <div className="contentInfo">
      <div className="containChildren">
        <div className="containImage">
          <img
            className="imageDetail"
            data-testid="recipe-photo"
            src={unity[`str${isMeal}Thumb`]}
            alt="yummy recipe"
          />
        </div>
        <div className="containFavorite">
          <div className="containTitle">
            <h3 className="recipe-title" data-testid="recipe-title">{unity[`str${isMeal}`]}</h3>
            {isMeal === 'Drink' ? <p>{unity.strAlcoholic}</p> : <p>{unity.strCategory}</p>}
          </div>
          <div className="containFavAndShare">
            <FavoriteAndShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
