import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import '../Styles/FavoriteAndShare.css';

const FavoriteAndShare = () => {
  const [copied, setCopied] = useState('');
  const [favoritedRecipe, setFavoritedRecipe] = useState(false);
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
        onClick={() => setFavoritedRecipe(!favoritedRecipe)}
      >
        <img
          src={favoritedRecipe ? Favorited : Favorite}
          alt="Favorite recipe" />
      </div>
      <p>{copied}</p>
    </div>
  );
}

export default FavoriteAndShare;
