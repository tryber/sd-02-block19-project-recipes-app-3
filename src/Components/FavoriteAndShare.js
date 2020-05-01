import React, { useState, useEffect, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import RecipesContext from '../Context';
import '../Styles/FavoriteAndShare.css';


const trueFavorited = (haveFavorited, foodDetail) => {
  if (haveFavorited) {
    const removeFavorited = JSON.parse(localStorage.getItem('favorite-recipes'))
      .filter(({ idMeal, idDrink }) => (
        idMeal !== foodDetail && idDrink !== foodDetail
      ));
    localStorage.setItem('favorite-recipes', JSON.stringify(removeFavorited));
  }
}

const falseFavorited = (haveFavorited, firstObject) => {
  if (!haveFavorited) {
    JSON.parse(localStorage.getItem('favorite-recipes'))
      ? localStorage.setItem('favorite-recipes', JSON.stringify([...JSON.parse(localStorage.getItem('favorite-recipes')), firstObject]))
      : localStorage.setItem('favorite-recipes', JSON.stringify([firstObject]));
  }
}

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
    setIsFavorite(localStorage.getItem('favorite-recipes')
      ? JSON.parse(localStorage.getItem('favorite-recipes'))
        .find(({ idMeal, idDrink }) => (
          idMeal === foodDetail || idDrink === foodDetail
        ))
      : false,
    );
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
