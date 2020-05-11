import React from 'react';
import HeaderPic from './HeaderPic';
import HeaderName from './HeaderName';


const HeaderPerfil = () => (
  <div className="ContainerHeaderP">
    <div className="headerPerfil">
      <HeaderPic />
      <HeaderName />
    </div>
      <h2 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email}
      </h2>
  </div>
);

export default HeaderPerfil;
