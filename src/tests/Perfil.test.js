import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, } from '@testing-library/react';
import Perfil from '../Pages/Perfil';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);
afterEach(() => localStorage.clear());

describe('test perfil', () => {
  it('render perfil', () => {
    localStorage.setItem('user', JSON.stringify({ email: 'test@test.co' }))
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <Perfil />
        </MemoryRouter>
      </AppProvider>
    );
    fireEvent.click(getByTestId('profile-top-btn'));
    expect(getByTestId('profile-email')).toBeInTheDocument();
    expect(getByTestId('profile-email').innerHTML).toBe('test@test.co');
    expect(getByTestId('profile-done-btn')).toBeInTheDocument();
    expect(getByTestId('profile-favorite-btn')).toBeInTheDocument();
    expect(getByTestId('profile-logout-btn')).toBeInTheDocument();
    fireEvent.click(getByTestId('profile-done-btn'));
    fireEvent.click(getByTestId('profile-favorite-btn'));
    fireEvent.click(getByTestId('profile-logout-btn'));
  })
})