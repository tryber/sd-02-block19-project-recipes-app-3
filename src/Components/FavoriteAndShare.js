import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import RecipesContext from '../Context';
import '../Styles/FavoriteAndShare.css';

const heartClick = (isFavorite, setIsFavorite) => {
  const { favoritedRecipes } = JSON.parse(localStorage.getItem('user'));
  setIsFavorite(!isFavorite);
  return isFavorite
    ? favoritedRecipes = [...favoritedRecipes, foodDetails]
    : favoritedRecipes.slice(0, favoritedRecipes.indexOf(foodDetails))
      .concat(favoritedRecipes.slice(favoritedRecipes.indexOf(foodDetails) + 1)
}

const FavoriteAndShare = () => {
  const [copied, setCopied] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const { foodDetails } = useContext(RecipesContext);
  const message = () => {
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('')
    }, 2000);
  }
  return (
    <div className="FavShare_father">
      <CopyToClipboard
        text={window.location.href}
        onCopy={() => message()}
      >
        <div className="FavShare_content">
          <img src={Share} alt="Share your recipe" />
        </div>
      </CopyToClipboard>
      <div
        className="FavShare_content"
        onClick={() => heartClick(isFavorite, setIsFavorite, foodDetails)}
      >
        <img
          src={isFavorite ? Favorited : Favorite}
          alt="Favorite recipe" />
      </div>
      <p>{copied}</p>
    </div>
  );
}

export default FavoriteAndShare;
