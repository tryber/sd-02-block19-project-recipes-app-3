import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Receitas from '../Pages/Receitas';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);

describe('Test Home page', () => {
  it('Page show "Loading" text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <AppProvider>
          <Receitas />
        </AppProvider>
      </MemoryRouter>,
    );
    const LoadText = getByText('Loading');
    expect(LoadText).toBeInTheDocument();
  });
});
