import React, { useState, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import RecipesContext from '../Context';
import { Link } from 'react-router-dom';
import profilePicBtn from '../Images/profilePicBtn.png';
import searchTopBtn from '../Images/searchTopBtn.png';
import CategoryBar from './CategoryBar';

const renderTitle = () => (
  <div>
    <Link to="/perfil">
      <img data-testid="profile-top-btn" src={profilePicBtn} alt="profile button" />
    </Link>
    <h2 data-testid="page-title">{
      window.location.href.includes('comidas')
        ? 'Comidas'
        : 'Bebidas'
    }
    </h2>
  </div>
);
const renderInputImage = (setVisibleSearch, visibleSearch) => (
  <input
    type="image"
    data-testid="search-top-btn"
    src={searchTopBtn}
    alt="search top button"
    onClick={() => setVisibleSearch(!visibleSearch)}
  />
);
const returnDebounce = (searchCriteria, inputChange) => (
  <DebounceInput
    disabled={!searchCriteria}
    debounceTimeout={600}
    onChange={(e) => inputChange(e.target.value)}
    data-testid="search-input"
  />
);
export default function Header() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [input, setInput] = useState('');
  const { defineSearch, setVisibleSearch, visibleSearch, setRequestInitialPage,
   } = useContext(RecipesContext);
  const arrayRadio = ['Ingrediente', 'Nome', 'Primeira letra'];
  const arrayValueRadio = ['/filter.php?i=', '/search.php?s=', '/search.php?f='];
  const inputChange = (iValue) => {
    setInput(iValue);
    setRequestInitialPage([]); defineSearch(iValue, searchCriteria);
  };
  const radioChange = (rValue) => {
    setSearchCriteria(rValue);
    if (input !== '') defineSearch(input, rValue);
  };
  return (
    <div className="header"> {renderTitle()}
      {renderInputImage(setVisibleSearch, visibleSearch)}
      <CategoryBar /> {visibleSearch && <form>
        {returnDebounce(searchCriteria, inputChange)}
        <div className="searchRecipes">
          {arrayRadio.map((ele, index) => (
            <div key={ele}> <input
              type="radio"
              name="recipeSearch"
              value={arrayValueRadio[index]}
              onClick={(e) => radioChange(e.target.value)}
              id={ele}
            /><label htmlFor={ele}>{ele}</label></div>
          ))}</div></form>}</div>
  );
}
