import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import ReceitasFavoritas from '../Pages/ReceitasFavoritas';
import AppProvider from '../Context/AppProvider';
import { object } from './mockCategoryAndRecipe';  

afterEach(() => {localStorage.clear(); cleanup()});

const mockUser = {
  name: 'lauro',
  email: 'lauro@RecipesContext.com'
}

describe('test Explorar Ingrediente component', () => {
  it('check localStorage', async () => {
    localStorage.setItem('favorite-recipes',JSON.stringify([object]));
    localStorage.setItem('user', JSON.stringify(mockUser));
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <ReceitasFavoritas />
        </MemoryRouter>
      </AppProvider>,
    );
    expect(getByTestId('0-horizontal-favorite-btn')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('user')).email).toBe('lauro@RecipesContext.com');
    fireEvent.click(getByTestId('0-horizontal-favorite-btn'))
  });
})