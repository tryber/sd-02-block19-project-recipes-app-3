import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { DebounceInput } from 'react-debounce-input';
import RecipesContext from '../Context';
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

const renderRadio = (radioChange) => {
  const arrayRadio = ['Ingrediente', 'Nome', 'Primeira letra'];
  const arrayValueRadio = ['/filter.php?i=', '/search.php?s=', '/search.php?f='];
  return arrayRadio.map((ele, index) => (
    <div key={ele}>
      <input
        type="radio"
        name="recipeSearch"
        value={arrayValueRadio[index]}
        onClick={(e) => radioChange(e.target.value)}
        id={ele}
      />
      <label htmlFor={ele}>{ele}</label>
    </div>
  ));
};

const renderDebounce = (searchCriteria, inputChange) => (
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


  const inputChange = (iValue) => {
    setInput(iValue);
    setRequestInitialPage([]);
    defineSearch(iValue, searchCriteria);
  };

  const radioChange = (rValue) => {
    setSearchCriteria(rValue);
    if (input !== '') defineSearch(input, rValue);
  };

  return (
    <div className="header">
      {renderTitle()}
      <input
        type="image"
        data-testid="search-top-btn"
        src={searchTopBtn}
        alt="search top button"
        onClick={() => setVisibleSearch(!visibleSearch)}
      />
      <CategoryBar />
      {visibleSearch && <form>
        {renderDebounce(searchCriteria, inputChange)}
        <div className="searchRecipes">{renderRadio(radioChange)}</div>
      </form>}
    </div>
  );
}
