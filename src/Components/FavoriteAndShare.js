import React, { useState, useEffect, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import RecipesContext from '../Context';
import '../Styles/FavoriteAndShare.css';

const heartClick = (isFavorite, setIsFavorite, foodObject, foodDetail) => {
  const mealOrDrink = foodObject.meals || foodObject.drinks;
  const firstObject = mealOrDrink[0];
  const haveFavorited = JSON.parse(localStorage.getItem('favorite-recipes'))
    && JSON.parse(localStorage.getItem('favorite-recipes')).find(({ idMeal, idDrink }) => (
      idMeal === foodDetail || idDrink === foodDetail
    ));
  if (haveFavorited) {
    const removeFavorited = JSON.parse(localStorage.getItem('favorite-recipes'))
      .filter(({ idMeal, idDrink }) => (
        idMeal !== foodDetail && idDrink !== foodDetail
      ));
    localStorage.setItem('favorite-recipes', JSON.stringify(removeFavorited));
  }
  if (!haveFavorited) {
    JSON.parse(localStorage.getItem('favorite-recipes'))
      ? localStorage.setItem('favorite-recipes', JSON.stringify([...JSON.parse(localStorage.getItem('favorite-recipes')), firstObject]))
      : localStorage.setItem('favorite-recipes', JSON.stringify([firstObject]));
  }
  setIsFavorite(!isFavorite);
};

const FavoriteAndShare = () => {
  const { foodDetail, foodObject } = useContext(RecipesContext);
  const [copied, setCopied] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const message = () => {
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };

  useEffect(() => {
    JSON.parse(localStorage.getItem('favorite-recipes'))
      ? setIsFavorite(JSON.parse(localStorage.getItem('favorite-recipes')).find(({ idMeal, idDrink }) => (
        idMeal === foodDetail || idDrink === foodDetail
      )))
      : setIsFavorite(false);
  }, []);

  return (
    <div className="FavShare_father">
      <CopyToClipboard
        data-testid="share-btn"
        text={window.location.href}
        onCopy={() => message()}
      >
        <div className="FavShare_content">
          <img src={Share} alt="Share your recipe" />
        </div>
      </CopyToClipboard>
      <div
        data-testid="favorite-btn"
        className="FavShare_content"
        onClick={() => heartClick(isFavorite, setIsFavorite, foodObject, foodDetail)}
      >
        <img
          src={isFavorite ? Favorited : Favorite}
          alt="Favorite recipe"
        />
      </div>
      <p>{copied}</p>
    </div >
  );
};

export default FavoriteAndShare;
