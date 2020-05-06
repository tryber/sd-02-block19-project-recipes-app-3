import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/';

const renderButtonAll = (defineSearch) => (
  <button
    onClick={() => defineSearch('')}
    value=""
    type="button"
    data-testid="All-category-filter"
  >
    All
  </button>
);

const CategoryBar = () => {
  const { visibleSearch, arrayCategory, requestCategory, searchResults, defineSearch,
  } = useContext(RecipesContext);
  useEffect(() => {
    const category = window.location.href.includes('comidas') ? '/categories.php' : '/list.php?c=list';
    requestCategory(category);
  }, [window.location.href]);

  const clickCategory = (value) => {
    searchResults(value);
  };
  return !visibleSearch && (
    <div>
      {renderButtonAll(defineSearch)}
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
