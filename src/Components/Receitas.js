import React, { useEffect, useState, useContext } from 'react';
import AppProvider from '../Context/index';

import Footer from '../Components/Footer';
const Receitas = ({ history }) => {
  const a = useContext(AppProvider)
  useEffect(() => {
    console.log(a)
    // setDrinkOrMeal(history);
  }, [history.location.pathname])
  return <Footer />;
};

export default Receitas;
