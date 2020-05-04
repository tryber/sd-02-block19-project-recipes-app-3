import React, { useContext, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import RecipesContext from '../Context';
import Header from '../Components/Header';
import Footer from '../Components/Footer';



const ExplorarReceita = () => {
  const { pageName, requestRandom, idDetail, setPageName, setIdDetail,setStopFetching,setVisibleSearch } = useContext(RecipesContext);
  useEffect(() => {
    return () => { setIdDetail(''); }
  }, [])
  return (
    <div>
      <Header />
      <Link to={`${window.location.pathname}/ingredientes`}>
        <button onClick={() => setPageName('Explorar Ingredientes')} data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>
      {pageName !== 'Explorar - Bebidas' && <Link to="/explorar/comidas/area">
        <button onClick={() => {
          setStopFetching(false);
          setPageName('Explorar Origem');
          setVisibleSearch(false);
          }} data-testid="explore-by-area" type="button">
          Por Local de Origem
        </button>
      </Link>}
      <button data-testid="explore-surprise" onClick={requestRandom} type="button">
        Me surpreenda!
      </button>
      {(idDetail !== '') && <Redirect to={`/receitas/${window.location.pathname.split('/')[2]}/${idDetail}`} />}
      <Footer />
    </div>
  );
};

export default ExplorarReceita;
