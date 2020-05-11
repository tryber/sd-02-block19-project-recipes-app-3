export const object = {
  idMeal: '52901',
  strMeal: 'Rock Cakes',
  strDrinkAlternate: null,
  strCategory: 'Dessert',
  strArea: 'British',
  strMealThumb: 'https:www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg',
};
const promisse = {
  ok: true,
  json: () => Promise.resolve({
    categories: [{ strCategory: 'test1' }, { strCategory: 'test2' }],
  }),
};

export const mockApi = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve(promisse))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        meals: [object, object, object, object, object,
          object, object, object, object, object, object, object],
      }),
    })).mockImplementationOnce(() => Promise.resolve(promisse))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        meals: [{
          idMeal: '52901',
          strMeal: 'Julinho',
        }, {
          idMeal: '52901',
          strMeal: 'Julinho',
        }],
      }),
    }))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        meals: [{ strArea: 'Area1' }, { strArea: 'Area2' }],
      }),
    }))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        meals: [object, object, object, object, object,
          object, object, object, object, object, object, object],
      }),
    }))
);

export const object2 = {
  idDrink: '13206', strDrink: 'Caipirissima', strVideo: null, strCategory: 'Ordinary Drink', strAlcoholic: 'Alcoholic', strGlass: 'Collins Glass', strInstructions: "Same as Caipirinha but instead of cachaca you add WHITE RUM. It's great!!!!!!!!", strInstructionsDE: 'Wie Caipirinha, aber anstelle von Cachaca f\u00fcgen Sie WHITE RUM hinzu. Es ist großartig!!!!!!!!', strDrinkThumb: 'https://www.thecocktaildb.com/images/media/drink/yd47111503565515.jpg', strIngredient1: 'Lime', strIngredient2: 'Sugar', strIngredient3: 'White rum', strIngredient4: 'Ice', strIngredient5: null, strMeasure1: '2 ', strMeasure2: '2 tblsp ', strMeasure3: '2-3 oz ', strMeasure4: 'crushed ', strMeasure5: null, strMeasure6: null, strMeasure7: null, strMeasure8: null, strMeasure9: null, strMeasure10: null, strMeasure11: null, strMeasure12: null, strMeasure13: null, strMeasure14: null, strMeasure15: null, strCreativeCommonsConfirmed: 'No', dateModified: '2017-08-24 10:05:15',
};

export const mockApiDrink = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [{ strCategory: 'test1' }, { strCategory: 'test2' }, { strCategory: 'test3' }, { strCategory: 'test4' }, { strCategory: 'test5' }, { strCategory: 'test6' }],
      }),
    }))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [object2, object2, object2, object2, object2, object2,
          object2, object2, object2, object2, object2, object2],
      }),
    }))
);

export const mockApiFailDrink = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve({
        message: 'fail to fetch',
      }),
    }))
);

export const mockApiDetails = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [object2],
      }),
    }))
);

export const mockNullApiDetails = () => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        xablau: 'não é valido',
      }),
    }))
);
