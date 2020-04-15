import React from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../Images/Drinks.svg';
import Explore from '../Images/Explore.svg';
import Meals from '../Images/Meals.svg';
import '../Styles/Footer.css';

const Footer = () => (
  <div className="Footer_all">
    <Link to="/bebidas" >
      <div
        data-testid="drinks-bottom-btn"
        className="Footer_icon"
      >
        <img src={Drinks} alt="Drinks redirect" />
      </div>
    </Link>
    <Link to="/explorar">
      <div
        data-testid="explore-bottom-btn"
        className="Footer_icon"
      >
        <img src={Explore} alt="Explore redirect" />
      </div>
    </Link>
    <Link to="/comidas">
      <div
        data-testid="food-bottom-btn"
        className="Footer_icon"
      >
        <img src={Meals} alt="Meals redirect" />
      </div>
    </Link>
  </div>
);

export default Footer;
