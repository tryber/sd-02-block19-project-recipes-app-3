import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import App from '../App';
import AppProvider from '../Context/AppProvider';
import { mockApi } from './mockCategoryAndRecipe';

afterEach(cleanup);

describe('test Explorar Origem component', () => {
  it('render App', async () => {
    mockApi();
    const { getByTestId, getByText } = render(
      <AppProvider>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </AppProvider>,
    );
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    fireEvent.click(loginButton);
    await wait();
    fireEvent.click(getByTestId('explore-bottom-btn'));
    await wait();
    fireEvent.click(getByTestId('explore-food'));
    await wait();
    fireEvent.click(getByTestId('explore-by-area'));   
    await wait();
    expect(getByTestId('All-option')).toBeInTheDocument();
    expect(getByTestId('Area1-option')).toBeInTheDocument();
    fireEvent.click(getByTestId('Area1-option'))
  });
});
