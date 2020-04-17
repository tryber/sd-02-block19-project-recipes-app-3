import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiRequest, meal, cocktail, resultsRandom } from '../Services/APIs';
import RecipesContext from './index';

export default function AppProvider({ children }) {
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [fetchError, setFetchError] = useState('');

  const successDrinkOrMeal = (results) => {
    const condition = results.meals || results.drinks;
    setRequestInitialPage(condition);
  };
  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
  };
  const setDrinkOrMeal = (history) => {
    const { location: { pathname } } = history;
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
