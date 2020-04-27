import React, { useContext } from 'react';
import RecipesContext from '../Context';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ExplorarReceita = () => {
  const { pageName, requestRandom, foodDetail } = useContext(RecipesContext);
  const { idDrink, idMeal } = foodDetail[0] || {};
  return (
    <div>
      <Header />
      <Link to={`${window.location.pathname}/ingredientes`}>
        <button type="button">
          Por Ingredientes
        </button>
      </Link>
      {pageName !== 'Explorar - Bebidas' && <Link to="/explorar/comidas/area">
        <button type="button">
          Por Local de Origem
        </button>
      </Link>}
      <button onClick={requestRandom} type="button">
        Me surpreenda!
      </button>
      {(idDrink || idMeal) && <Redirect to={`/receitas/${window.location.pathname.split('/')[2]}/${idDrink || idMeal}`} />}
      <Footer />
    </div>
  );
};

export default ExplorarReceita;
