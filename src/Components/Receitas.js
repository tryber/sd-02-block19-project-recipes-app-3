import React, { useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { resultsRandom } from '../Services/APIs';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from './Header';

const renderCard = (setFoodDetail, food, index, local) => (
  <Link
    onClick={(() => setFoodDetail(food))}
    to={(window.location.href.includes('comidas') ? `/receitas/comidas/${food.idMeal}` : `/bebidas/${food.idDrink}`)}
    key={`food${Math.random() * 10000000}`}
  >
    <div>
      <img
        data-testid={`${index}-card-img`}
        alt={food[`str${local}`]}
        src={food[`str${local}Thumb`]}
      />
    </div>
    <p>{food.strCategory}</p>
    <p data-testid={`${index}-card-name`} >{food[`str${local}`]}</p>
  </Link>
);

const redirectWindow = (array, setFoodDetail) => {
  const recipe = array.idDrink || array.idMeal;
  setFoodDetail(recipe);
  return (
    <Redirect to={`${window.location.pathname}/${recipe}`} />
  );
};

const results = (noResults, requestInitialPage, setFoodDetail) => (
  !noResults ? requestInitialPage.map((food, index) => {
    const local = food.idDrink ? 'Drink' : 'Meal';
    return (
      index < 12 && renderCard(setFoodDetail, food, index, local));
  }) : <p>Sem Resultados</p>
);

const Receitas = () => {
  const {
    setDrinkOrMeal, fetchError, setFoodDetail, requestInitialPage,
    isFetching, setIsFetching, setRequestInitialPage, noResults,
  } = useContext(RecipesContext);

  useEffect(() => {
    setRequestInitialPage([]);
    setIsFetching(true);
    setDrinkOrMeal(resultsRandom);
  }, [window.location.href]);
  if (requestInitialPage === undefined) return (<h1>Nenhum Resultado</h1>);

  return (
    !isFetching
      ? fetchError ||
      <div>
        <Header />
        {requestInitialPage.length === 1 && redirectWindow(requestInitialPage[0], setFoodDetail)}
        {results(noResults, requestInitialPage, setFoodDetail)}
        <Footer />
      </div>
      : <p>Loading</p>
  );
};

export default Receitas;
