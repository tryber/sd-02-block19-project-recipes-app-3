import React, { useState, useContext } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RecipesContext } from '../Context';
import profilePicBtn from '../Images/profilePicBtn.png';
import searchTopBtn from '../Images/searchTopBtn.png';

export default function Header({ history }) {
  const [input, setInput] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('');
  const [visibleSearch, setVisibleSearch] = useState(false);
  const { defineSearch } = useContext(RecipesContext);
  defineSearch(input, searchCriteria);
  return (
    <div className="header">
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profilePicBtn} alt="profile button" />
      </Link>
      <h2 data-testid="page-title">{/comidas/.test(history.location.pathname)
        ? 'Comidas'
        : 'Bebidas'}
      </h2>
      <input
        type="image"
        data-testid="search-top-btn"
        src={searchTopBtn}
        alt="search top button"
        onClick={() => setVisibleSearch(!visibleSearch)}
      />
      {visibleSearch && <form>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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

Header.propTypes = {
  history: propTypes.string.isRequired,
};
