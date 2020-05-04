import React from 'react';
import HeaderPic from './HeaderPic';
import HeaderName from './HeaderName';


const HeaderPerfil = () => (
  <div>
    <div>
      <HeaderPic />
      <HeaderName />
      <h2 data-testid="profile-email">
        {JSON.parse(localStorage.getItem('user')).email}
      </h2>
    </div>
  </div>
);

export default HeaderPerfil;
