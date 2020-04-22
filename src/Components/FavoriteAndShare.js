import React from 'react';
import Share from '../Images/Share.svg';
import Favorite from '../Images/Favorite.svg';

const FavoriteAndShare = () => (
  <div>
    <img src={Favorite} alt="Favorite recipe" />
    <img src={Share} alt="Share your recipe" />
  </div>
);

export default FavoriteAndShare;;