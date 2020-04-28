import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../Context';
import Header from './Header';
import Footer from './Footer';

const ExplorarReceita = () => {
  const { pageName, requestRandom, foodDetail } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      <Link to={`${window.location.pathname}/ingredientes`}>
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>
      {pageName !== 'Explorar - Bebidas' && <Link to="/explorar/comidas/area">
        <button data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
      </Link>}
      <button data-testid="explore-surprise" onClick={requestRandom} type="button">
        Me surpreenda!
      </button>
      {(foodDetail) && <Redirect to={`/receitas/${window.location.pathname.split('/')[2]}/${foodDetail}`} />}
      <Footer />
    </div>
  );
};

export default ExplorarReceita;
