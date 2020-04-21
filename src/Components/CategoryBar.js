import React, { useContext } from 'react';
import RecipesContext from '../Context/';

const CategoryBar = ({ visibleSearch }) => {
  const { requestInitialPage } = useContext(RecipesContext);
  return (
    <div>
      {
        requestInitialPage.map((food, index) => (
          index < 5 && !visibleSearch
            ?
            <div>
              <button type="button">{food.strCategory}</button>
            </div>
            : null
        ))
      }
    </div>
  )
}

export default CategoryBar;
