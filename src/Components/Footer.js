import React from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../images/Drinks.svg';
import Explore from '../images/Explore.svg';
import Meals from '../images/Meals.svg';
import '../Styles/Footer.css';

const Footer = () => (
  <div className="Footer_all">
    <Link to='/bebidas' >
      <div className="Footer_icon">
        <img src={Drinks} alt={`Drinks redirect`} />
      </div>
    </Link>
    <Link to='/explorar'>
      <div className="Footer_icon">
        <img src={Explore} alt={`Explore redirect`} />
      </div>
    </Link>
    <Link to='/comidas'>
      <div className="Footer_icon">
        <img src={Meals} alt={`Meals redirect`} />
      </div>
    </Link>
  </div>
);

export default Footer;
