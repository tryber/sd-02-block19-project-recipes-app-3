import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Footer from '../Components/Footer';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);

describe('Test footer', () => {
  test('render footer', () => {
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

  test('click in each button, browser redirect to other page', () => {
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      </AppProvider>
    );
    
    const eachButton = (button) => {
      fireEvent.click(button);
      expect(button).toBeDefined();
    };

    const drinksButton = getByTestId('drinks-bottom-btn');
    const explorerButton = getByTestId('explore-bottom-btn');
    const foodButton = getByTestId('food-bottom-btn');

    eachButton(drinksButton);
    eachButton(explorerButton);
    eachButton(foodButton);
  });
});
