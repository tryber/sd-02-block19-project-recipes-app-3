import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../Components/Footer';
import profilePicBtn from '../Images/profilePicBtn.png';

const buttonsArray = ['Receitas Feitas', 'Receitas Favoritas'];
const valueButtons = ['/receitas-feitas', '/receitas-favoritas'];

const Perfil = () => (
  <div>
    <div><img src={profilePicBtn} alt="profile button" />
      <h1>Perfil</h1></div>
    <div><h2 data-testid="profile-email">
      {JSON.parse(localStorage.getItem('user')).email}
    </h2></div>
    <div>{buttonsArray.map((button, index) => (
      <Link key={button} to={valueButtons[index]}>
        <button
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

export default Perfil;
