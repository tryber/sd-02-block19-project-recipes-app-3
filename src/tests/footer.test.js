import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Footer from '../Components/Footer';

afterEach(cleanup);

describe('Test footer', ()=> {
  it('render footer', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
    expect(getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(getByTestId('explore-bottom-btn')).toBeInTheDocument();
    expect(getByTestId('food-bottom-btn')).toBeInTheDocument();
  });
});
