import React, { useEffect, useState } from 'react';
import HeaderPerfil from './HeaderPerfil';
import CopyButton from './CopyButton';
import '../Styles/ReceitasFeitas.css';
import { Link } from 'react-router-dom';

const renderButtons = (setDoneRecipes, copyDone) => (
  <div>
    <button
      data-testid="filter-by-all-btn"
      type="button"
      onClick={() => setDoneRecipes(copyDone)}
    >
      All
      </button>
    <button
      data-testid="filter-by-food-btn"
      type="button"
      onClick={() => setDoneRecipes(copyDone.filter(({ idMeal }) => idMeal))}
    >
      Food
      </button>
    <button
      data-testid="filter-by-drink-btn"
      type="button"
      onClick={() => setDoneRecipes(copyDone.filter(({ idDrink }) => idDrink))}
    >
      Drinks
      </button>
  </div>
);

const renderCard = (index, food, type, dataFinal) => (
  <div>
    <p data-testid={`${index}-horizontal-top-text`}>
      {food.strAlcoholic? `${food.strAlcoholic} Drink` : `${food.strArea} - ${food.strCategory}`}
    </p>
    <Link to={`/receitas/${food.idMeal ? 'comidas' : 'bebidas'}/${food[`id${type}`]}`}>
      <img
        data-testid={`${index}-horizontal-image`}
        alt={food[`str${type}`]}
        src={food[`str${type}Thumb`]}
      />
      <p data-testid={`${index}-horizontal-name`}>{food[`str${type}`]}</p>
    </Link>
    <p data-testid={`${index}-horizontal-done-date`}>{dataFinal}</p>
    <CopyButton
      data-testid={`${index}-horizontal-share-btn`}
      url={`${window.location.origin}/receitas/${food.idMeal ? 'comidas' : 'bebidas'}/${food[`id${type}`]}`}
    />
  </div>
);

const ReceitasFeitas = () => {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [copyDone, setCopyDone] = useState([]);
  useEffect(() => {
    const done = JSON.parse(localStorage.getItem('done-recipes'));
    setDoneRecipes(done);
    setCopyDone(done);
  }, []);
  return (
    <div >
      <HeaderPerfil />
      {renderButtons(setDoneRecipes, copyDone)}
      <div className="containCards">
        {doneRecipes.map((food, index) => {
          const type = food.idMeal ? 'Meal' : 'Drink';
          const dataFormatada = food.doneDate.substring(0, food.doneDate.indexOf('T')).split('-');
          const dataFinal = `${dataFormatada[2]}-${dataFormatada[1]}-${dataFormatada[0]}`;
          return renderCard(index, food, type, dataFinal);
        })}
      </div>
    </div>);
};

export default ReceitasFeitas;
