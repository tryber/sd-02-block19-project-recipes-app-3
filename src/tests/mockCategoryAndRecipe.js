const object = {
  idMeal: '52901',
  strMeal: 'Rock Cakes',
  strDrinkAlternate: null,
  strCategory: 'Dessert',
  strArea: 'British',
  strMealThumb: 'https:www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg',
};

export const mockApi = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        categories: [{ strCategory: 'test1' }, { strCategory: 'test2' }],
      })
    })).mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        meals: [object, object, object, object, object, object, object, object, object, object, object, object],
        categories: [{ strCategory: 'test1' }, { strCategory: 'test2' }],
      })
    }))
);
const object2 = {
  idDrink: '52901',
  strDrink: 'Caipiríssima',
  strDrinkAlternate: null,
  strCategory: 'Dessert',
  strArea: 'British',
  strDrinkThumb: 'https:www.theDrinkdb.com/images/media/Drinks/tqrrsq1511723764.jpg',
}

export const mockApiDrink = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [{ strCategory: 'test1' }, { strCategory: 'test2' }, { strCategory: 'test3' }, { strCategory: 'test4' }, { strCategory: 'test5' }, { strCategory: 'test6' }],
      })
    }))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [object2, object2, object2, object2, object2, object2, object2, object2, object2, object2, object2, object2],
      })
    }))

);

