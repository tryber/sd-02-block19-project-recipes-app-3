import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import RecipesContext from '../Context';
import profilePicBtn from '../Images/profilePicBtn.png';
import searchTopBtn from '../Images/searchTopBtn.png';

export default function Header() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [visibleSearch, setVisibleSearch] = useState(false);
  const { defineSearch } = useContext(RecipesContext);
  const { location: { href } } = window;
  return (
    <div className="header">
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profilePicBtn} alt="profile button" />
      </Link>
      <h2 data-testid="page-title">{
        href.includes('comidas')
          ? 'Comidas'
          : 'Bebidas'
      }
      </h2>
      <input
        type="image"
        data-testid="search-top-btn"
        src={searchTopBtn}
        alt="search top button"
        onClick={() => setVisibleSearch(!visibleSearch)}
      />
      {visibleSearch && <form>
        <DebounceInput
          debounceTimeout={600}
          onChange={(e) => defineSearch(e.target.value, searchCriteria)}
          data-testid="search-input"
        />
        <div className="searchRecipes">
          <input
            type="radio"
            name="recipeSearch"
            value="/filter.php?i="
            onClick={(e) => setSearchCriteria(e.target.value)}
          />
          <label htmlFor="ingredient">Ingrediente</label>
          <input
            type="radio"
            name="recipeSearch"
            value="/search.php?s="
            onClick={(e) => setSearchCriteria(e.target.value)}
          />
          <label htmlFor="name">Nome</label>
          <input
            type="radio"
            name="recipeSearch"
            value="/search.php?f="
            onClick={(e) => setSearchCriteria(e.target.value)}
          />
          <label htmlFor="firstLetter">Primeira letra</label>
        </div>
      </form>}
    </div>
  );
}
