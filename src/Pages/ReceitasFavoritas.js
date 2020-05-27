import React, { useEffect, useState } from 'react';
import { renderButtons, renderCard } from './ReceitasFeitas';
import Favorited from '../Images/Favorited.svg';
import HeaderPerfil from '../Components/HeaderPerfil';

const ReceitasFavoritas = () => {
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
  }, [copyFav]);
  return (
    <div ><HeaderPerfil />
      <div className="containButtonFav">
        {favoriteRecipes && renderButtons(setFavoriteRecipes, copyFav)}</div>
      <div className="containCards">
        {favoriteRecipes.map((food, index) => {
          const type = food.idMeal ? 'Meal' : 'Drink';
          const inputLike = () => (<div className="inputLike">
            <input
              data-testid={`${index}-horizontal-favorite-btn`}
              type="image"
              src={Favorited}
              alt="heart"
              onClick={() => setCopyFav(favoriteRecipes.filter(({ idMeal, idDrink }) => (
                food.idDrink !== idDrink || food.idMeal !== idMeal)))}
            /></div>);
          return renderCard(index, food, type, '', inputLike);
        })}</div>
    </div>);
};

export default ReceitasFavoritas;
