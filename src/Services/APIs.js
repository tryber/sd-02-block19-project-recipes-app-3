export const cocktail = 'thecocktaildb';
export const meal = 'themealdb';
export const resRdm = '/random.php';

export const apiRequest = (requisition) => {
  const drinkOrMeal = window.location.href.includes('comidas') ? meal : cocktail;
  return (
    fetch(`https://www.${drinkOrMeal}.com/api/json/v1/1${requisition}`)
      .then((response) => response.json()
        .then((JSON) => {
          if (response.ok) return Promise.resolve(JSON);
          return Promise.reject(JSON);
        }))
  );
};

export const apiReverse = (requisition) => {
  const drinkOrMeal = window.location.href.includes('comidas') ? cocktail : meal;
  return (
    fetch(`https://www.${drinkOrMeal}.com/api/json/v1/1${requisition}`)
      .then((response) => response.json()
        .then(response.ok ? Promise.resolve(JSON) : Promise.reject(JSON)))
  );
};
