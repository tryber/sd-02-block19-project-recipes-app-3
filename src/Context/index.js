import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { apiRequest, meal, cocktail, resultsRandom } from '../Services/APIs';

export const RecipesContext = createContext();

export default function AppProvider({ children }) {
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [fetchError,setFetchError] = useState('');

  const sucessDrinkOrMeal = (param) => {
    console.log(param)
  }
  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
  }
  const setDrinkOrMeal = (history) => {
    /comidas/.test(history.location.pathname)
      ? apiRequest(meal, resultsRandom)
        .then(sucessDrinkOrMeal, failDrinkOrMeal)
      : apiRequest(cocktail, resultsRandom)
        .then(sucessDrinkOrMeal, failDrinkOrMeal)
  }
  const context = {
    requestInitialPage,
    setDrinkOrMeal,
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
