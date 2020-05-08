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
      <div>{buttonsArray.map((button, index) => (
        <Link key={button} to={valueButtons[index]}>
          <button
            onClick={() => setPageName(button)}
            data-testid={(index === 0) ? 'profile-done-btn' : 'profile-favorite-btn'}
            type="button"
          >
            {button}
          </button>
        </Link>
      ))}</div>
      <Link to="/">
        <button
          type="button"
          onClick={() => localStorage.clear()}
          data-testid="profile-logout-btn"
        >
          Sair
        </button>
      </Link>
      <Footer />
    </div>
  );
};

export default Perfil;
