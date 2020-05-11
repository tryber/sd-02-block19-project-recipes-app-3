import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/';
import '../Styles/CategoryBar.css';

const renderButtonAll = (defineSearch) => (
  <button
    className="Category_Button"
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
    <div className="CategoryBar_all">
      {renderButtonAll(defineSearch)}
      {
        arrayCategory.map((food, index) => (
          index < 5
            ?
            <button
              key={`${food.strCategory} filter`}
              className="Category_Button"
              data-testid={`${food.strCategory}-category-filter`}
              value={`/filter.php?c=${food.strCategory}`}
              type="button"
              onClick={(e) => clickCategory(e.target.value)}
            >
              {food.strCategory}
            </button>
            : null
        ))
      }
    </div>
  );
};

export default CategoryBar;
