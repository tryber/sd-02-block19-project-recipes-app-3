import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Footer from '../Components/Footer';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);

describe('Test footer', () => {
  it('render footer', () => {
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </AppProvider>,
    );
    expect(getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(getByTestId('explore-bottom-btn')).toBeInTheDocument();
    expect(getByTestId('food-bottom-btn')).toBeInTheDocument();
  });
});
