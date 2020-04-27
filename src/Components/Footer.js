import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../Images/Drinks.svg';
import Explore from '../Images/Explore.svg';
import Meals from '../Images/Meals.svg';
import '../Styles/Footer.css';
import RecipesContext from '../Context';


const Footer = () => {
  const { setPageName } = useContext(RecipesContext);
  return (
    <div className="Footer_all">
      <Link
        onClick={() => setPageName('Bebidas')}
        to="/receitas/bebidas"
      >
        <div
          data-testid="drinks-bottom-btn"
          className="Footer_icon"
        >
          <img src={Drinks} alt="Drinks redirect" />
        </div>
      </Link>
      <Link
        onClick={() => setPageName('Explorar')}
        to="/explorar"
      >
        <div
          data-testid="explore-bottom-btn"
          className="Footer_icon"
        >
          <img src={Explore} alt="Explore redirect" />
        </div>
      </Link>
      <Link
        onClick={() => setPageName('Comidas')}
        to="/receitas/comidas"
      >
        <div
          data-testid="food-bottom-btn"
          className="Footer_icon"
        >
          <img src={Meals} alt="Meals redirect" />
        </div>
      </Link>
    </div>
  )
};

export default Footer;
