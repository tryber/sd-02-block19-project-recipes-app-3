import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Drinks from '../Images/Drinks.svg';
import Explore from '../Images/Explore.svg';
import Meals from '../Images/Meals.svg';
import RecipesContext from '../Context';
import '../Styles/Footer.css';

const DrinksToFooter = (setRequestInitialPage, setPageName) => (
  <Link
    to="/receitas/bebidas"
    onClick={
      !window.location.href.includes('bebidas')
        ? () => { setRequestInitialPage([]); setPageName('Bebidas'); }
        : null
    }
  >
    <div
      data-testid="drinks-bottom-btn"
      className="Footer_icon"
    >
      <img src={Drinks} alt="Drinks redirect" />
    </div>
  </Link>
);

const ExploreToFooter = (setRequestInitialPage, setPageName) => (
  <Link
    onClick={
      !window.location.href.includes('explorar')
        ? () => { setRequestInitialPage([]); setPageName('Explorar'); }
        : null
    }
    to="/explorar"
  >
    <div
      data-testid="explore-bottom-btn"
      className="Footer_icon"
    >
      <img src={Explore} alt="Explore redirect" />
    </div>
  </Link>
);

const MealsToFooter = (setRequestInitialPage, setPageName) => (
  <Link
    onClick={
      !window.location.href.includes('comidas')
        ? () => { setRequestInitialPage([]); setPageName('Comidas'); }
        : null
    }
    to="/receitas/comidas"
  >
    <div
      data-testid="food-bottom-btn"
      className="Footer_icon"
    >
      <img src={Meals} alt="Meals redirect" />
    </div>
  </Link>
);

const Footer = () => {
  const { setRequestInitialPage, setPageName } = useContext(RecipesContext);
  return (
    <div className="Footer_all">
      {DrinksToFooter(setRequestInitialPage, setPageName)}
      {ExploreToFooter(setRequestInitialPage, setPageName)}
      {MealsToFooter(setRequestInitialPage, setPageName)}
    </div>
  );
};

export default Footer;
