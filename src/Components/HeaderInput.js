import React, { useContext } from 'react';
import RecipesContext from '../Context';
import searchTopBtn from '../Images/searchTopBtn.png';

const arrayPName = ['Explorar', 'Explorar - Comidas', 'Explorar - Bebidas'];

export default function HeaderInput(setSearchCriteria, setInput) {
  const { setVisibleSearch, visibleSearch, pageName } = useContext(RecipesContext);
  return (
    <input
      disabled={arrayPName.includes(pageName)}
      type="image"
      data-testid="search-top-btn"
      src={searchTopBtn}
      alt="search top button"
      onClick={() => { setVisibleSearch(!visibleSearch); setSearchCriteria(null); setInput(''); }}
    />
  );
}
