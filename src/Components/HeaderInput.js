import React, { useContext } from 'react';
import RecipesContext from '../Context';
import searchTopBtn from '../Images/searchTopBtn.svg';

const arrayPName = ['/explorar', '/explorar/comidas', '/explorar/bebidas'];

export default function HeaderInput(setSearchCriteria, setInput) {
  const { setVisibleSearch, visibleSearch } = useContext(RecipesContext);
  return (
    <input
      disabled={arrayPName.includes(window.location.pathname)}
      type="image"
      data-testid="search-top-btn"
      src={searchTopBtn}
      alt="search top button"
      onClick={() => { setVisibleSearch(!visibleSearch); setSearchCriteria(null); setInput(''); }}
    />
  );
}
