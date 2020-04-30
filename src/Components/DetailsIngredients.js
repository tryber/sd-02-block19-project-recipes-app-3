import React, { useContext, useEffect } from 'react';
import RecipesContext from '../Context/';

const local = () => window.location.pathname.split('/')[3];

const checkIndex = (isChecked, ingredient, setIsChecked) => (
  isChecked.includes(ingredient)
    ? setIsChecked(
      [...isChecked].filter((bool) => (
        bool !== ingredient
      ))
    )
    : setIsChecked([...isChecked, ingredient])
);

const showCheckBox = (setIsChecked, isChecked, ingredient) => {
  return (
    <input
      type="checkbox"
      checked={isChecked.includes(ingredient)}
      onChange={() => checkIndex(isChecked, ingredient, setIsChecked)}
    />
  );
}

const ingredientAndMeasure = (
  ingredientToShow,
  measureToShow,
  index,
  setIsChecked,
  isChecked,
  isRecipeStarted,
) => (
    <div>
      {isRecipeStarted && showCheckBox(setIsChecked, isChecked, `${ingredientToShow} || ${measureToShow}`)}
      <span data-testid={`${index}-ingredient-name`}>
        {ingredientToShow}
      </span>
      <span> || </span>
      <span data-testid={`${index}-ingredient-measure`}>
        {measureToShow}
      </span>
    </div>
  );

const DetailsIngredients = () => {
  const { foodObject, isChecked, setIsChecked, isRecipeStarted, foodDetail } = useContext(RecipesContext);
  const receive = foodObject.meals || foodObject.drinks;
  const isFood = receive[0];
  const isIngredient = Object.keys(isFood).filter((food) => (
    food.includes('Ingredient')
  ));
  const isMeasure = Object.keys(isFood).filter((food) => (
    food.includes('Measure')
  ));

  useEffect(() => {
    JSON.parse(localStorage.getItem(foodDetail))
      && setIsChecked([...JSON.parse(localStorage.getItem(foodDetail))])
  }, []);

  useEffect(() => {
    localStorage.setItem(foodDetail, JSON.stringify(isChecked))
  }, [isChecked]);

  return (
    <div>
      {isIngredient
        && <div>
          <h4>Ingredients</h4>
          {isIngredient.map((ingredient, index) => {
            const ingredientToShow = isFood[ingredient];
            const measureToShow = isFood[isMeasure[index]];
            return (
              ingredientToShow
              && <div key={`${ingredient} and ${isMeasure[index]} to Recipe`}>
                {ingredientAndMeasure(ingredientToShow, measureToShow, index, setIsChecked, isChecked, isRecipeStarted)}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default DetailsIngredients;
