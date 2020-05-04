import React, { useState, useEffect, useContext } from 'react';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import RecipesContext from '../Context';
import '../Styles/FavoriteAndShare.css';
import CopyButton from './CopyButton';


const trueFavorited = (haveFavorited, foodDetail) => {
  if (haveFavorited) {
    const removeFavorited = JSON.parse(localStorage.getItem('favorite-recipes'))
      .filter(({ idMeal, idDrink }) => (
        idMeal !== foodDetail && idDrink !== foodDetail
      ));
    localStorage.setItem('favorite-recipes', JSON.stringify(removeFavorited));
  }
};

const falseFavorited = (haveFavorited, firstObject) => {
  if (!haveFavorited) {
    localStorage.setItem('favorite-recipes',
      localStorage.getItem('favorite-recipes')
        ? JSON.stringify([...JSON.parse(localStorage.getItem('favorite-recipes')), firstObject])
        : JSON.stringify([firstObject]));
  }
};

const heartClick = (isFavorite, setIsFavorite, foodObject, foodDetail) => {
  const mealOrDrink = foodObject.meals || foodObject.drinks;
  const firstObject = mealOrDrink[0];
  const haveFavorited = JSON.parse(localStorage.getItem('favorite-recipes'))
    && JSON.parse(localStorage.getItem('favorite-recipes')).find(({ idMeal, idDrink }) => (
      idMeal === foodDetail || idDrink === foodDetail
    ));
  trueFavorited(haveFavorited, foodDetail);
  falseFavorited(haveFavorited, firstObject);
  setIsFavorite(!isFavorite);
};

const favoriteIcon = (isFavorite) => (
  <img
    src={isFavorite ? Favorited : Favorite}
    alt="Favorite recipe"
  />
);

const FavoriteAndShare = () => {
  const { foodDetail, foodObject } = useContext(RecipesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(localStorage.getItem('favorite-recipes')
      ? JSON.parse(localStorage.getItem('favorite-recipes'))
        .find(({ idMeal, idDrink }) => (
          idMeal === foodDetail || idDrink === foodDetail
        )) : false,
    );
  }, []);

  return (
    <div className="FavShare_father">
      <CopyButton url={window.location.href} />
      <button
        data-testid="favorite-btn"
        className="FavShare_content"
        onClick={() => heartClick(isFavorite, setIsFavorite, foodObject, foodDetail)}
      >
        {favoriteIcon(isFavorite)}
      </button>
    </div >
  );
};

export default FavoriteAndShare;
