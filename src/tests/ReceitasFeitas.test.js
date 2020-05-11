import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import ReceitasFeitas from '../Pages/ReceitasFeitas';
import AppProvider from '../Context/AppProvider';
import { object, object2 } from './mockCategoryAndRecipe';  

afterEach(() => {localStorage.clear(); cleanup()});

const mockUser = {
  name: 'lauro',
  email: 'lauro@RecipesContext.com'
}

describe('test Explorar Ingrediente component', () => {
  it('check localStorage', async () => {
    localStorage.setItem('done-recipes',JSON.stringify([{...object, doneDate: new Date()}]));
    localStorage.setItem('user', JSON.stringify(mockUser));
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <ReceitasFeitas />
        </MemoryRouter>
      </AppProvider>,
    );
    expect(getByTestId('0-horizontal-top-text')).toBeInTheDocument();
    expect(JSON.parse(localStorage.getItem('user')).email).toBe('lauro@RecipesContext.com');
    fireEvent.click(getByTestId('filter-by-all-btn'));
    fireEvent.click(getByTestId('filter-by-food-btn'));
    fireEvent.click(getByTestId('filter-by-drink-btn'));
  });
  it('check localStorage again', async () => {
    localStorage.setItem('done-recipes',JSON.stringify([{...object2, doneDate: new Date()}]));
    localStorage.setItem('user', JSON.stringify(mockUser));
   render(
      <AppProvider>
        <MemoryRouter>
          <ReceitasFeitas />
        </MemoryRouter>
      </AppProvider>,
    );
  });
})