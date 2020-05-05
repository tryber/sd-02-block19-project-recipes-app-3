import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, wait, fireEvent } from '@testing-library/react';
import AppProvider from '../Context/AppProvider';
import { mockApi } from './mockCategoryAndRecipe';
import App from '../App';
afterEach(cleanup);
afterEach(() => jest.restoreAllMocks());


describe('Test Loading and click CategoryBar', () => {
  it('Page show "Loading" text and render category bar meal', async () => {
    function renderWithRouter(
      ui,
      {
        route = '/',
        history = createMemoryHistory({ initialEntries: [route] }),
      } = {}
    ) {
      const Wrapper = ({ children }) => (
        <Router history={history}>{children}</Router>
      )
      return {
        ...render(ui, { wrapper: Wrapper }),
        history,
      }
    }
    mockApi();
    const { getAllByText, getByText, getByTestId } = renderWithRouter(
        <AppProvider>
          <App />
        </AppProvider>,'/receitas/comidas'
    );
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '123456' } });
    fireEvent.click(loginButton);
    const LoadText = getByText('Loading');
    expect(LoadText).toBeInTheDocument();
    await wait();
    expect(getAllByText(/Rock Cakes/)[0]).toBeInTheDocument();
    const test1 = getByTestId('test1-category-filter');
    const test2 = getByTestId('test2-category-filter');
    const all = getByTestId('All-category-filter');
    expect(test1).toBeInTheDocument();
    expect(test2).toBeInTheDocument();
    expect(all).toBeInTheDocument();
    fireEvent.click(test1);
    fireEvent.click(test2);
    fireEvent.click(all);
  });
});