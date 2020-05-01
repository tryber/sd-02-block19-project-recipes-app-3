import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { resultsRandom } from '../Services/APIs';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from './Header';
import "../Styles/Cards.css"

const renderCard = (setFoodDetail, food, index, local) => (
  <Link
    onClick={(() => setFoodDetail(food))}
    className="recipe-container"
    to={(window.location.href.includes('comidas') ? `/receitas/comidas/${food.idMeal}` : `/bebidas/${food.idDrink}`)}
    key={`food${Math.random() * 10000000}`}
  >
    <img
      data-testid={`${index}-card-img`}
      className="recipe-image"
      alt={food[`str${local}`]}
      src={food[`str${local}Thumb`]}
    />
    <div className="CatName-Wrapper">
      <p className="recipe-category">{food.strCategory}</p>
      <p className="recipe-name" data-testid={`${index}-card-name`} >{food[`str${local}`]}</p>
    </div>
  </Link>
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
