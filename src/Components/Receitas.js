import React, { useEffect, useContext } from 'react';
import { resultsRandom } from '../Services/APIs';
import { Link } from 'react-router-dom';
import RecipesContext from '../Context';
import Footer from '../Components/Footer';
import Header from './Header';

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
  return (!isFetching ? fetchError || <div><Header />
    {!noResults ? requestInitialPage.map((food, index) => {
      const local = food.idDrink ? 'Drink' : 'Meal';
      return (
        index < 12
          ? <Link
            onClick={(() => setFoodDetail(food))}
            to={(window.location.href.includes('comidas') ? `/receitas/comidas/${food.idMeal}` : `/bebidas/${food.idDrink}`)}
            key={food}
          ><div>
            <img
              data-testid={`${index}-card-img`}
              alt={food[`str${local}`]}
              src={food[`str${local}Thumb`]}
            /></div>
            <p>{food.strCategory}</p>
            <p data-testid={`${index}-card-name`} >{food[`str${local}`]}</p>
          </Link> : null
      );
    }) : <p>Sem Resultados</p>} <Footer /></div> : <p>Loading</p>);
};

export default Receitas;
