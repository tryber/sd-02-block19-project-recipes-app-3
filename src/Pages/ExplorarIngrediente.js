import React, { useEffect, useContext } from 'react';
import RecipesContext from '../Context';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ExplorarOrigem = () => {
  const { requestIngredient, ingredient, searchForIngredient, setStopFetching } = useContext(RecipesContext);
  useEffect(() => {
    requestIngredient('/list.php?i=list');
  }, []);
  return (
    <div>
      <Header />
      {ingredient.length > 0 ? ingredient.map(({ strIngredient, strIngredient1 }, index) => {
        const validIngredient = strIngredient || strIngredient1;
        return (
          index < 20 && (
            <Link
              to={`/receitas/${strIngredient ? 'comidas' : 'bebidas'}`}
              key={validIngredient}
              onClick={() => {
                setStopFetching(true);
                searchForIngredient(`/filter.php?i=${validIngredient}`)
              }}
            >
              <img
                data-testid={`${validIngredient}-card-img`}
                alt={validIngredient}
                src={`https://www.${strIngredient ? 'themealdb' : 'thecocktaildb'}.com/images/ingredients/${validIngredient}.png`}
              />
              <p data-testid={`${validIngredient}-card-name`}>{validIngredient}</p>
            </Link>
          ))
      }) : <p>Loading</p>}
      <Footer />
    </div>
  );
};

export default ExplorarOrigem;
