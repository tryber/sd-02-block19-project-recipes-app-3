import React, { useContext } from 'react';
import RecipesContext from '../Context';
import FavoriteAndShare from './FavoriteAndShare';

const DetailImage = () => {
  const { foodObject, foodObjectFail } = useContext(RecipesContext);
  const actualFood = foodObject.meals || foodObject.drinks
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
            />
          </div>
          <div>
            <h3 data-testid="recipe-title">{unity[`str${isMeal}`]}</h3>
            <p>{unity.strCategory}</p>
          </div>
          <FavoriteAndShare />
        </div>
        : <p>Loading...</p>}
    </div>
  );
}

export default DetailImage;
