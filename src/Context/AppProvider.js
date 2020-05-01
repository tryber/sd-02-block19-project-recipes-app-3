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
    setrequestinitialpage([...condition]);
    setstopfetching(true);
    return '';
  } if (condition.length === 1) {
    setrequestinitialpage([...condition, ...requestinitialpage]);
    setstopfetching(false);
  }
  return '';
};

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
    if (requestInitialPage.length < 12 && requestInitialPage.length > 0) {
      setDrinkOrMeal(resultsRandom);
    }
  }, [requestInitialPage]);


  const requestCategory = (requestParam) => (
    apiRequest(requestParam)
    .then((results) => {
      const { categories, drinks } = results;
      setArrayCategory(categories || drinks);
    })
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
      setDrinkOrMeal(`${searchCriteria}${input.split(' ').join('_')}`);
      return;
    }
    setNoResults(false);
    setRequestInitialPage([...copy]);
  };

  const context = {
    setIsFetching,
    requestInitialPage,
    setDrinkOrMeal,
    fetchError,
    defineSearch,
    isFetching,
    visibleSearch,
    setVisibleSearch,
    requestCategory,
    arrayCategory,
    setRequestInitialPage,
    noResults,
    setFoodDetail,
    foodDetail,
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
