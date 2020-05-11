import React, { useState, useContext } from 'react';
import { DebounceInput } from 'react-debounce-input';
import RecipesContext from '../Context';
import HeaderInput from './HeaderInput';
import CategoryBar from './CategoryBar';
import DropdownOrigem from './DropdownOrigem';
import HeaderName from './HeaderName';
import HeaderPic from './HeaderPic';
import '../Styles/Header.css';

const renderTitle = () => (
  <div>
    <HeaderPic />
    <HeaderName />
  </div>
);

const renderRadio = (radioChange) => {
  const arrayRadio = ['Ingrediente', 'Nome', 'Primeira letra'];
  const testIdRadio = ['ingredient', 'name', 'first-letter'];
  const arrayValueRadio = ['/filter.php?i=', '/search.php?s=', '/search.php?f='];
  return arrayRadio.map((ele, index) => (
    <div key={ele}>
      <input
        type="radio"
        name="recipeSearch"
        value={arrayValueRadio[index]}
        onClick={(e) => radioChange(e.target.value)}
        id={ele}
        data-testid={`${testIdRadio[index]}-search-radio`}
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
    maxLength={searchCriteria === '/search.php?f=' ? 1 : 30}
  />
);
const arrayPName = ['Explorar', 'Explorar - Comidas', 'Explorar - Bebidas'];
export default function Header() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [input, setInput] = useState('');
  const { defineSearch, visibleSearch, setRequestInitialPage, pageName,
  } = useContext(RecipesContext);
  const inputChange = (iValue) => {
    setInput(iValue);
    setRequestInitialPage([]);
    setInput(iValue);
    defineSearch(iValue, searchCriteria);
  };
  const radioChange = (rValue) => {
    setSearchCriteria(rValue);
    if (input !== '') defineSearch(input, rValue);
  };
  return (
    <div className="Header_father">
      {renderTitle()}
      {HeaderInput(setSearchCriteria, setInput)}
      {pageName === 'Explorar Origem' && window.location.href.includes('comidas')
        ? <DropdownOrigem />
        : !arrayPName.includes(pageName) && <CategoryBar />
      }
      {(visibleSearch && !arrayPName.includes(pageName)) && (
        <div> {renderDebounce(searchCriteria, inputChange)}

          <div className="searchRecipes">{renderRadio(radioChange)}</div>
        </div>)}
    </div>
  );
}
