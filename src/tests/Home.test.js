import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Home from '../Pages/Home';

afterEach(cleanup);

describe('Test Home page', () => {
  it('Test contain inputs in page and disabled button', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(emailInput.tagName).toBe('INPUT');
    expect(passwordInput.tagName).toBe('INPUT');
    expect(loginButton.tagName).toBe('BUTTON');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(loginButton.disabled).toBe(true);
  });
  it('Test value change input and redirect', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-submit-btn');
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    expect(emailInput.value).toBe('test@test.com');
    fireEvent.change(passwordInput, { target: { value: '1234567' } });
    expect(passwordInput.value).toBe('1234567');
    expect(loginButton.disabled).toBe(false);
    expect(loginButton.innerHTML).toBe('Entrar');
    fireEvent.click(loginButton);
    expect(localStorage.getItem('meals-token')).toBe('1')
    expect(localStorage.getItem('cocktails-token')).toBe('1');
    expect(JSON.parse(localStorage.getItem('user'))).toMatchObject({ email: 'test@test.com' });
  });
});
