import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/';

const CategoryBar = () => {
  const { visibleSearch, arrayCategory, requestCategory, setDrinkOrMeal, defineSearch,
  } = useContext(RecipesContext);
  useEffect(() => {
    const category = window.location.href.includes('comidas') ? '/categories.php' : '/list.php?c=list';
    requestCategory(category);
  }, [window.location.href]);

  const clickCategory = (value) => {
    setDrinkOrMeal(value);
  };

  return !visibleSearch && (
    <div>
      <button onClick={() => defineSearch('')} value="" type="button">All</button>
      {
        arrayCategory.map((food, index) => (
          index < 5
          ? <div key={food.strCategory}>
            <button
              data-testid={`${food.strCategory}-category-filter`}
              value={`/filter.php?c=${food.strCategory}`}
              type="button"
              onClick={(e) => clickCategory(e.target.value)}
            >
              {food.strCategory}
            </button>
          </div>
            : null
        ))
      }
    </div>
  );
};

export default CategoryBar;
