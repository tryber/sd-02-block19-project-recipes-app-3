import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profilePicBtn from '../Images/profilePicBtn.png';
import RecipesContext from '../Context';

const HeaderPic = () => {
  const { setPageName } = useContext(RecipesContext);
  return (
    <Link
      onClick={() => setPageName('Perfil')}
      to="/perfil"
    >
      <img data-testid="profile-top-btn" src={profilePicBtn} alt="profile button" />
    </Link>
  );
}

export default HeaderPic;
