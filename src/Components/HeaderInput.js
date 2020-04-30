import React, { useContext } from 'react';
import RecipesContext from '../Context';
import searchTopBtn from '../Images/searchTopBtn.png';

export default function HeaderInput(setSearchCriteria, setInput) {
  const { setVisibleSearch, visibleSearch } = useContext(RecipesContext);
  return (
    <input
      type="image"
      data-testid="search-top-btn"
      src={searchTopBtn}
      alt="search top button"
      onClick={() => { setVisibleSearch(!visibleSearch); setSearchCriteria(null); setInput(''); }}
    />
  );
}
