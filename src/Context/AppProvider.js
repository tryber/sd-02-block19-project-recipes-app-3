import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiRequest, meal, cocktail, resultsRandom } from '../Services/APIs';
import RecipesContext from './index';

export default function AppProvider({ children }) {
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [storeCriteria, setStoreCriteria] = useState('');
  const [href, setHref] = useState('');
  const defineSearch = (input, searchCriteria) => {
    if (input !== '' && searchCriteria !== '') {
      setStoreCriteria(`${searchCriteria}${input.split(' ').join('_')}`);
    }
  };

  const successDrinkOrMeal = (results) => {
    const condition = results.meals || results.drinks;
    setRequestInitialPage(condition);
  };
  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
  };
  const setDrinkOrMeal = (pathname) => {
    setHref(pathname);
    return pathname.includes('comidas')
      ? apiRequest(meal, resultsRandom)
        .then(successDrinkOrMeal, failDrinkOrMeal)
      : apiRequest(cocktail, resultsRandom)
        .then(successDrinkOrMeal, failDrinkOrMeal);
  };
  const context = {
    requestInitialPage,
    setDrinkOrMeal,
    fetchError,
    defineSearch,
    storeCriteria,
    href,
  };
  return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
