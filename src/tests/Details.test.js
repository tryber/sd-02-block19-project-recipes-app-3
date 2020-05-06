import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import DetailsPage from '../Pages/DetailsPage';
import AppProvider from '../Context/AppProvider';
import { mockApiDetails, mockNullApiDetails } from './mockCategoryAndRecipe';

afterEach(cleanup);
afterEach(() => jest.restoreAllMocks());

describe('test page details', () => {
  it('Details render', async () => {
    mockApiDetails();
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <DetailsPage />
        </MemoryRouter>
      </AppProvider>,
    );
    await wait();
    expect(getByTestId('recipe-photo')).toBeInTheDocument();
    expect(getByTestId('recipe-title')).toBeInTheDocument();
    expect(getByTestId('0-ingredient-name')).toBeInTheDocument();
    fireEvent.click(getByTestId('buttonDetails'));
  });
  it('Details render', async () => {
    mockNullApiDetails();
    const { getByText } = render(
      <AppProvider>
        <MemoryRouter>
          <DetailsPage />
        </MemoryRouter>
      </AppProvider>,
    );
    await wait();
    expect(getByText(/Loading/)).toBeInTheDocument();
  });
  it('Details render', async () => {
    mockApiDetails();
    delete global.window.location;
    const href = 'http://localhost:3000/receitas/comidas/13206';
    global.window.location = { href, pathname: '/receitas/comidas/13206' };
    render(
      <AppProvider>
        <MemoryRouter>
          <DetailsPage />
        </MemoryRouter>
      </AppProvider>,
    );
    await wait();
  });
});
