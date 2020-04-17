import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { apiRequest } from '../Services/APIs';
import RecipesContext from './index';

export default function AppProvider({ children }) {
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [fetchError, setFetchError] = useState('');
  const [storeCriteria, setStoreCriteria] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const successDrinkOrMeal = (results) => {
    const condition = results.meals || results.drinks;
    setRequestInitialPage(condition);
    setIsFetching(false);
  };
  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
    setIsFetching(false);
  };
  const setDrinkOrMeal = (resultsRandom) => {
    setIsFetching(true)
    return apiRequest(resultsRandom)
      .then(successDrinkOrMeal, failDrinkOrMeal);
  };
  const defineSearch = (input, searchCriteria) => {
    console.log(`${searchCriteria}${input.split(' ').join('_')}`);
    if (input !== '' && searchCriteria !== '') {
      setDrinkOrMeal(`${searchCriteria}${input.split(' ').join('_')}`);
    }
  };
  const context = {
    requestInitialPage,
    setDrinkOrMeal,
    fetchError,
    defineSearch,
    storeCriteria,
    isFetching,
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
