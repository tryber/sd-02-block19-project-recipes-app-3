import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { apiRequest, resRdm } from '../Services/APIs';
import RecipesContext from './index';

export default function AppProvider({ children }) {
  const local = window.location.pathname.split('/')[3];
  const [requestInitialPage, setRequestInitialPage] = useState([]);
  const [copy, setCopy] = useState([]);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [arrayCategory, setArrayCategory] = useState([]);
  const [stopFetching, setStopFetching] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [foodDetail, setFoodDetail] = useState(local);
  const [foodObject, setFoodObject] = useState({});
  const [foodObjectFail, setFoodObjectFail] = useState({});
  const [isRecipeStarted, setIsRecipeStarted] = useState(false);
  const [isChecked, setIsChecked] = useState([]);
  const [pageName, setPageName] = useState('Comidas');
  const [origin, setOrigin] = useState([]);

  const successDrinkOrMeal = (results) => {
    const condition = results.meals || results.drinks;
    setRequestInitialPage([...condition, ...requestInitialPage]);
    setStopFetching(false);
  };

  const failDrinkOrMeal = ({ message }) => {
    setFetchError(message);
  };

  const setDrinkOrMeal = (paramRequest) => {
    setNoResults(false);
    apiRequest(paramRequest).then(successDrinkOrMeal, failDrinkOrMeal);
  };

  const successSearch = ({ drinks, meals }) => {
    if (!drinks && !meals) return setNoResults(true);
    setStopFetching(true);
    return setRequestInitialPage([...drinks || meals]);
  };

  const searchResults = (paramRequest) => {
    setNoResults(false);
    apiRequest(paramRequest).then(successSearch, failDrinkOrMeal);
  };

  const successFoodRequest = (apiReturnFood) => {
    setFoodObject(apiReturnFood);
  };

  const failFoodRequest = ({ message }) => {
    setFoodObjectFail(message);
  };

  const idSearch = (searchParam) => {
    apiRequest(searchParam)
      .then(successFoodRequest, failFoodRequest);
  };

  useEffect(() => {
    if (local !== undefined) {
      setFoodDetail(local);
    }
  }, [window.location.href]);

  useEffect(() => {
    if (stopFetching) return;
    if (requestInitialPage.length === 12) {
      setIsFetching(false);
      setCopy([...requestInitialPage]);
    }
    if (requestInitialPage.length < 12 && requestInitialPage.length > 0) { setDrinkOrMeal(resRdm); }
  }, [requestInitialPage]);


  const requestCategory = (requestParam) => (
    apiRequest(requestParam)
      .then((results) => {
        const { categories, drinks } = results;
        setArrayCategory(categories || drinks);
      })
  );


  const requestOrigin = (requestParam) => (apiRequest(requestParam)
    .then(({ meals }) => {setOrigin([...meals]);setStopFetching(false)})
  );
  
  const requestRandom = () => (
    apiRequest('/random.php')
      .then(({ drinks = [{}], meals = [{}] }) => {
        const { idDrink } = drinks[0];
        const { idMeal } = meals[0];
        setFoodDetail(idDrink || idMeal);
      })
  );


  const defineSearch = (input, searchCriteria) => {
    if (input !== '' && searchCriteria !== '') {
      searchResults(`${searchCriteria}${input.split(' ').join('_')}`);
      return;
    }
    setRequestInitialPage([...copy]);
    setNoResults(false);
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
    copy,
    pageName,
    setPageName,
    idSearch,
    foodObject,
    foodObjectFail,
    isRecipeStarted,
    setIsRecipeStarted,
    isChecked,
    setIsChecked,
    requestRandom,
    searchResults
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
