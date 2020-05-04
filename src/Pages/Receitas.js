import React, { useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { resRdm } from '../Services/APIs';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

const renderCard = (setFoodDetail, food, index) => {
  const type = food.idMeal ? 'Meal' : 'Drink';
  return (
    <Link
      onClick={(() => setFoodDetail(food[`id${type}`]))}
      to={(window.location.href.includes('comidas') ? `/receitas/comidas/${food.idMeal}` : `/receitas/bebidas/${food.idDrink}`)}
      key={`food${Math.random() * 10000000}`}
    >
      <div>
        <img
          data-testid={`${index}-card-img`}
          alt={food[`str${type}`]}
          src={food[`str${type}Thumb`]}
        />
      </div>
      <p>{food.strCategory}</p>
      <p data-testid={`${index}-card-name`} >{food[`str${type}`]}</p>
    </Link>
  );
};

const redirectWindow = (array, setFoodDetail, foodDetail) => {
  const recipe = array.idDrink || array.idMeal;
  if (foodDetail !== recipe) setFoodDetail(recipe);
  return (
    <Redirect to={`/receitas${window.location.pathname.includes('comidas') ? '/comidas' : '/bebidas'}/${recipe}`} />
  );
};


const results = (noResults, requestInitialPage, setFoodDetail) => (
  !noResults ? requestInitialPage.map((food, index) => (
      index < 12 && renderCard(setFoodDetail, food, index)))
   : <p>Sem Resultados</p>
);

const Receitas = () => {
  const {
    setDrinkOrMeal, fetchError, setFoodDetail, requestInitialPage,
    isFetching, setIsFetching, setRequestInitialPage, noResults, stopFetching,
    foodDetail,
  } = useContext(RecipesContext);
  useEffect(() => {
    if (!stopFetching) {
      setRequestInitialPage([]);
      setIsFetching(true);
      setDrinkOrMeal(resRdm);
    }
  }, [window.location.href]);

  useEffect(() => () => setRequestInitialPage([]), []);
  if (requestInitialPage === undefined) return (<h1>Nenhum Resultado</h1>);
  return (
    !isFetching
      ? fetchError ||
      <div>
        <Header />
        {requestInitialPage.length === 1 &&
          redirectWindow(requestInitialPage[0], setFoodDetail, foodDetail)}
        {results(noResults, requestInitialPage, setFoodDetail)}
        <Footer />
      </div>
      : <p>Loading</p>
  );
};

export default Receitas;
