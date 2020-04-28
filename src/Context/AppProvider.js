import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiRequest, resultsRandom } from '../Services/APIs';
import RecipesContext from './index';

const verify = (
  condition,
  setnoresults,
  requestinitialpage,
  setrequestinitialpage,
  setstopfetching,
) => {
  if (!condition) return setnoresults(true);
  if (condition.length > 1) {
    setstopfetching(true);
  }
  setrequestinitialpage([...condition, ...requestinitialpage]);
  return setstopfetching(false);
};

export default function AppProvider({ children }) {
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [copy, setCopy] = useState([]);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [arrayCategory, setArrayCategory] = useState([]);
  const [stopFetching, setStopFetching] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [foodDetail, setFoodDetail] = useState({});
  const [origin, setOrigin] = useState([]);
  const [pageName, setPageName] = useState('Explorar Origem');

  const successDrinkOrMeal = (results) => {
    const condition = results.meals || results.drinks;

    verify(
      condition,
      setNoResults,
      requestInitialPage,
      setRequestInitialPage,
      setStopFetching,
    );
  };

  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
  };

  const setDrinkOrMeal = (paramRequest) => {
    setNoResults(false);
    apiRequest(paramRequest)
      .then(successDrinkOrMeal, failDrinkOrMeal);
  };

  useEffect(() => {
    if (stopFetching) return;
    if (requestInitialPage.length === 12) {
      setIsFetching(false);
      setCopy([...requestInitialPage]);
    }
    if (requestInitialPage.length < 12 && requestInitialPage.length > 0) {
      setDrinkOrMeal(resultsRandom);
    }
  }, [requestInitialPage]);


  const requestCategory = (requestParam) => (apiRequest(requestParam)
    .then((results) => {
      const { categories, drinks } = results;
      setArrayCategory(categories || drinks);
    })
  );

  const requestOrigin = (requestParam) => (apiRequest(requestParam)
    .then(({meals}) => {
      setOrigin([...meals])
    })
  );

  const defineSearch = (input, searchCriteria) => {
    if (input !== '' && searchCriteria !== '') {
      setDrinkOrMeal(`${searchCriteria}${input.split(' ').join('_')}`);
      return;
    }
    setNoResults(false);
    setRequestInitialPage([...copy]);
  };
  const context = {
    setIsFetching,
    requestInitialPage,
    setRequestInitialPage,
    setDrinkOrMeal,
    fetchError,
    defineSearch,
    isFetching,
    visibleSearch,
    setVisibleSearch,
    requestCategory,
    arrayCategory,
    noResults,
    setFoodDetail,
    foodDetail,
    requestOrigin,
    origin,
    pageName, 
    setPageName,
    copy,
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
