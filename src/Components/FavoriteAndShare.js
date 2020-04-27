import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import Favorited from '../Images/Favorited.svg';
import '../Styles/FavoriteAndShare.css';

const heartClick = (isFavorite, setIsFavorite) => {
  const localStorageUser = JSON.parse(localStorage.getItem('user'));
  setIsFavorite(!isFavorite);
  console.log(localStorageUser)
}

const FavoriteAndShare = () => {
  const [copied, setCopied] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const message = () => {
    setCopied('Copied!');
    setTimeout(() => {
      setCopied('')
    }, 2000);
  }
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
        onClick={() => heartClick(isFavorite, setIsFavorite)}
      >
        <img
          src={isFavorite ? Favorited : Favorite}
          alt="Favorite recipe" />
      </div>
      <p>{copied}</p>
    </div >
  );
}

export default FavoriteAndShare;
