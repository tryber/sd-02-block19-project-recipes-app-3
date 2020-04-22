import React from 'react';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';
import '../Styles/FavoriteAndShare.css';

const FavoriteAndShare = () => (
  <div className="FavShare_father">
    <div className="FavShare_content">
      <img src={Share} alt="Share your recipe" />
    </div>
    <div className="FavShare_content">
      <img src={Favorite} alt="Favorite recipe" />
    </div>
  </div>
);

export default FavoriteAndShare;;