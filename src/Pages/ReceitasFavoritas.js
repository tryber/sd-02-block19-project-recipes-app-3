import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { renderButtons } from './ReceitasFeitas';
import Favorited from '../Images/Favorited.svg';
import HeaderPerfil from '../Components/HeaderPerfil';
import CopyButton from '../Components/CopyButton';


const renderCard = (food, type, index, setCopyFav, favoriteRecipes, boolean) => (
  <div>
    <Link to={`/receitas/${food.idMeal ? 'comidas' : 'bebidas'}/${food[`id${type}`]}`}>
      <img
        data-testid={`${index}-horizontal-image`}
        alt={food[`str${type}`]}
        src={food[`str${type}Thumb`]}
      />
      <p data-testid={`${index}-horizontal-name`}>{food[`str${type}`]}</p>
    </Link>
    {boolean && <p>{food.strCategory}</p>}
    {boolean && <p>{food.strArea}</p>}
    {!boolean && <p>{food.strAlcoholic}</p>}
    <CopyButton
      url={`${window.location.origin}/receitas/${food.idMeal ? 'comidas' : 'bebidas'}/${food[`id${type}`]}`}
    />
    <input
      data-testid={`${index}-horizontal-favorite-btn`}
      type="image"
      src={Favorited}
      alt="heart"
      onClick={() => setCopyFav(favoriteRecipes.filter(({ idMeal, idDrink }) => (
        food.idDrink !== idDrink || food.idMeal !== idMeal)))}
    />
  </div>
)
const ReceitasFeitas = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [copyFav, setCopyFav] = useState([]);
  useEffect(() => {
    const done = JSON.parse(localStorage.getItem('favorite-recipes'));
    setFavoriteRecipes(done);
    setCopyFav(done);
  }, []);
  useEffect(() => {
    setFavoriteRecipes([...copyFav]);
    localStorage.setItem('favorite-recipes', JSON.stringify(copyFav));
  }, [copyFav])
  return (
    <div >
      <HeaderPerfil />
      {favoriteRecipes && renderButtons(setFavoriteRecipes, copyFav)}
      <div className="containCards">
        {favoriteRecipes.map((food, index) => {
          const type = food.idMeal ? 'Meal' : 'Drink';
          return renderCard(food, type, index, setCopyFav, favoriteRecipes, food.idMeal ? true : false);
        })}
      </div>
    </div>);
}

export default ReceitasFeitas;
