import React, { useEffect, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
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

const redirectWindow = ({idDrink, idMeal}, setFoodDetail) => {
  const recipe = idDrink || idMeal;
  console.log('recipe:', recipe);
  setFoodDetail(recipe)
  return (
    <Redirect to={`${window.location.pathname}/${recipe}`} />
  );
}

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
  console.log(requestInitialPage);
  return (
    !isFetching
      ? fetchError ||
      <div>
        <Header />
        {requestInitialPage.length === 1 && redirectWindow(requestInitialPage[0], setFoodDetail)}
        {!noResults ? requestInitialPage.map((food, index) => {
          const local = food.idDrink ? 'Drink' : 'Meal';
          return (
            index < 12
              ? renderCard(setFoodDetail, food, index, local)
              : null
          );
        }) : <p>Sem Resultados</p>}
        <Footer />
      </div>
      : <p>Loading</p>
  );
};

export default Receitas;
