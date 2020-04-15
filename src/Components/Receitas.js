import React, { useEffect, useState, useContext } from 'react';
import RecipesContext from '../Context/';
import Footer from '../Components/Footer';

const Receitas = ({ history }) => {
  const { setDrinkOrMeal, fetchError, requestInitialPage } = useContext(RecipesContext);
  useEffect(() => {
    setDrinkOrMeal(history);
  }, [history.location.pathname]);
  console.log(typeof requestInitialPage)
  return (
    fetchError ||
    <div>
      <Footer />
    </div>
  )
};

export default Receitas;
