import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Components/Footer';
import HeaderPerfil from '../Components/HeaderPerfil';
import RecipesContext from '../Context';

const buttonsArray = ['Receitas Feitas', 'Receitas Favoritas'];
const valueButtons = ['/receitas-feitas', '/receitas-favoritas'];
const Perfil = () => {
  const { setPageName } = useContext(RecipesContext);
  return (
    <div>
      <HeaderPerfil />
      <div className="containExplore" >{buttonsArray.map((button, index) => (
        <Link className="exploreLinks" key={button} to={valueButtons[index]}>
          <button
            className="exploreButtons"
            onClick={() => setPageName(button)}
            data-testid={(index === 0) ? 'profile-done-btn' : 'profile-favorite-btn'}
            type="button"
          >
            {button}
          </button>
        </Link>
      ))}
        <Link className="exploreLinks" to="/">
          <button
            className="exploreButtons"
            type="button"
            onClick={() => localStorage.clear()}
            data-testid="profile-logout-btn"
          >
            Sair
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Perfil;
