import React, { useContext } from 'react';
import RecipesContext from '../Context';

const DetailImage = () => {
  const { foodObject, foodObjectFail } = useContext(RecipesContext);
  const { meals } = foodObject;
  const isMeal = window.location.href.includes('comidas')
    ? 'Meal' : 'Drink';
  return (
    <div>
      {meals
        ? <div>
          <div>
            <img src={meals[0][`str${isMeal}Thumb`]} />
          </div>
          <div></div>
        </div>
        : <p>Loading...</p>}
    </div>
  );
}

export default DetailImage;
