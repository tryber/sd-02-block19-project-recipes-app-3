import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import RecipesContext from '../Context';
import profilePicBtn from '../Images/profilePicBtn.png';
import searchTopBtn from '../Images/searchTopBtn.png';
import CategoryBar from './CategoryBar';

export default function Header() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [input, setInput] = useState('');
  const { defineSearch, setVisibleSearch, visibleSearch, setRequestInitialPage,
   } = useContext(RecipesContext);
  const arrayRadio = ['Ingrediente', 'Nome', 'Primeira letra'];
  const arrayValueRadio = ['/filter.php?i=', '/search.php?s=', '/search.php?f='];

  const inputChange = (iValue) => {
    setInput(iValue)
    setRequestInitialPage([]);
    defineSearch(iValue, searchCriteria);
  }
  
  const radioChange = (rValue) => {
    setSearchCriteria(rValue);
    if (input !== '') defineSearch(input, rValue);
  }

  return (
    <div className="header">
      <Link to="/perfil">
        <img data-testid="profile-top-btn" src={profilePicBtn} alt="profile button" />
      </Link>
      <h2 data-testid="page-title">{
        window.location.href.includes('comidas')
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
      <CategoryBar />
      {visibleSearch && <form>
        <DebounceInput
          disabled={!searchCriteria}
          debounceTimeout={600}
          onChange={(e) => inputChange(e.target.value)}
          data-testid="search-input"
        />
        <div className="searchRecipes">
          <input
            type="radio"
            name="recipeSearch"
            value="/filter.php?i="
            onClick={(e) => radioChange(e.target.value)}
          />
          <label htmlFor="ingredient">Ingrediente</label>
          <input
            type="radio"
            name="recipeSearch"
            value="/search.php?s="
            onClick={(e) => radioChange(e.target.value)}
          />
          <label htmlFor="name">Nome</label>
          <input
            type="radio"
            name="recipeSearch"
            value="/search.php?f="
            onClick={(e) => radioChange(e.target.value)}
          />
          <label htmlFor="firstLetter">Primeira letra</label>
        </div>
      </form>}
    </div>
  );
}
