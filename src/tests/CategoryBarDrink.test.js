import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import Receitas from '../Pages/Receitas';
import AppProvider from '../Context/AppProvider';
import { mockApiDrink, mockApiFailDrink } from './mockCategoryAndRecipe';

afterEach(cleanup);
afterEach(() => jest.restoreAllMocks());

describe('test category', () => {
  it('render category bar drink', async () => {
    mockApiDrink();
    const { getAllByText, getByTestId } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AppProvider>
          <Receitas />
        </AppProvider>
      </MemoryRouter>,
    );
    await wait();
    const test1 = getByTestId('test1-category-filter');
    const test2 = getByTestId('test2-category-filter');
    const all = getByTestId('All-category-filter');
    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
    expect(all).toBeInTheDocument();
    expect(getAllByText(/Caipirissima/)[0]).toBeInTheDocument();
    fireEvent.click(getByTestId('search-top-btn'));
  });
  it('fail fetch', async () => {
    mockApiFailDrink();
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <AppProvider>
          <Receitas />
        </AppProvider>
      </MemoryRouter>,
    );
    await wait();
    expect(getByText(/fail to fetch/)).toBeInTheDocument();
  });
})

