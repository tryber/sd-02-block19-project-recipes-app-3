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
      {favoriteRecipes && renderButtons(setFavoriteRecipes, copyFav)}
      <div className="containCards">
        {favoriteRecipes.map((food, index) => {
          const type = food.idMeal ? 'Meal' : 'Drink';
          return (<div>
            {renderCard(index, food, type)}
            <input
              data-testid={`${index}-horizontal-favorite-btn`}
              type="image"
              src={Favorited}
              alt="heart"
              onClick={() => setCopyFav(favoriteRecipes.filter(({ idMeal, idDrink }) => (
                food.idDrink !== idDrink || food.idMeal !== idMeal)))}
            /></div>
          );
        })}</div>
    </div>);
};

export default ReceitasFavoritas;
