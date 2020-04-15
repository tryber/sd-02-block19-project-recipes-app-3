export const cocktail = 'thecocktaildb';
export const meal = 'themealdb';

export const apiRequest = (drinkOrMeal, requisition) => (
  fetch(`https://www.${drinkOrMeal}.com/api/json/v1/1${requisition}`)
    .then(response => response.json()
      .then(response.ok ? Promise.resolve(JSON) : Promise.reject(JSON)))
);
