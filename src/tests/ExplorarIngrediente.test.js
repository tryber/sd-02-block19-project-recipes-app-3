import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import ExplorarIngrediente from '../Pages/ExplorarIngrediente';
import AppProvider from '../Context/AppProvider';

const myMock = (json) => (
  jest.spyOn(global, 'fetch')
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        categories: [{ strCategory: 'test1' }, { strCategory: 'test2' }],
      })}))
    .mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        drinks: [json]
      }),
    }))
);

afterEach(cleanup);

describe('test Explorar Ingrediente component', () => {
  it('render explorar', async () => {
    myMock({ idIngredient: '552', strIngredient: 'Elderflower cordial', strDescription: 'Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.', strType: 'Cordial', strAlcohol: null, strABV: null });
    const { getByTestId, getByText } = render(
      <AppProvider>
        <MemoryRouter>
          <ExplorarIngrediente />
        </MemoryRouter>
      </AppProvider>,
    );
    const LoadText = getByText('Loading');
    expect(LoadText).toBeInTheDocument();
    await wait();
    expect(getByTestId('Elderflower cordial-card-img')).toBeInTheDocument();
    fireEvent.click(getByTestId('Elderflower cordial-card-img'))
  });
  it('testing ingredient on Link', async () => {
    myMock({ idIngredient: '552', strIngredient1: 'Elderflower cordial', strDescription: 'Elderflower cordial is a soft drink made largely from a refined sugar and water solution and uses the flowers of the European elderberry. Historically the cordial has been popular in North Western Europe where it has a strong Victorian heritage.', strType: 'Cordial', strAlcohol: null, strABV: null });
    const { getByText } = render(
      <AppProvider>
        <MemoryRouter>
          <ExplorarIngrediente />
        </MemoryRouter>
      </AppProvider>,
    );
    await wait();
    const ingredient1 = getByText('Elderflower cordial');
    expect(ingredient1).toBeInTheDocument();
  });
})