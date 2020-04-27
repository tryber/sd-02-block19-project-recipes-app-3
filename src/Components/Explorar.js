import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import RecipesContext from '../Context';


const Explorar = () => {
  const { setPageName } = useContext(RecipesContext);
  return (
    <div>
      <Header />
      <Link
        onClick={() => setPageName('Explorar - Comidas')}
        to="/explorar/comidas"
      >
        <button
          data-testid="explore-food"
          type="button"
        >
          Explorar Comidas
        </button>
      </Link>
      <Link
        to="/explorar/bebidas"
        onClick={() => setPageName('Explorar - Bebidas')}
      >
        <button
          data-testid="explore-drinks"
          type="button"
        >
          Explorar Bebidas
        </button>
      </Link>
      <Footer />
    </div>
  );
};
export default Explorar;
