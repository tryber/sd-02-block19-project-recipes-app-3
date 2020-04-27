import React, { useContext } from 'react';
import RecipesContext from '../Context';
import FavoriteAndShare from './FavoriteAndShare';

const DetailImage = () => {
  const { foodObject } = useContext(RecipesContext);
  const actualFood = foodObject.meals || foodObject.drinks;
  const unity = actualFood ? actualFood[0] : null;
  const isMeal = window.location.href.includes('comidas')
    ? 'Meal' : 'Drink';
  return (
    <div>
      {unity
        ? <div>
          <div>
            <img
              data-testid="recipe-photo"
              src={unity[`str${isMeal}Thumb`]}
              alt="yummy recipe"
            />
          </div>
          <div>
            <h3 data-testid="recipe-title">{unity[`str${isMeal}`]}</h3>
            <p>{unity.strCategory}</p>
          </div>
          <FavoriteAndShare />
        </div>
        : null}
    </div>
  );
}

export default DetailImage;
