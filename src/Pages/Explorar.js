import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RecipesContext from '../Context';
import '../Styles/Explorar.css';

const Explorar = () => {
  const { setPageName } = useContext(RecipesContext);
  return (
    <div><Header /><div className="containExplore">
      <Link
        className="exploreLinks"
        onClick={() => setPageName('Explorar - Comidas')}
        to="/explorar/comidas"
      >
        <button
          className="exploreButtons"
          data-testid="explore-food"
          type="button"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link
        className="exploreLinks"
        to="/explorar/bebidas"
        onClick={() => setPageName('Explorar - Bebidas')}
      >
        <button
          className="exploreButtons"
          data-testid="explore-drinks"
          type="button"
        >
          Explorar Bebidas
        </button>
      </Link></div><Footer /></div>
  );
};
export default Explorar;
