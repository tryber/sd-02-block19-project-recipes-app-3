import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Explorar from '../Pages/Explorar';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);

describe('test explorar', () => {
  it('render explorar', async () => {
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <Explorar />
        </MemoryRouter>
      </AppProvider>,
    );
    expect(getByTestId('explore-food')).toBeInTheDocument();
    fireEvent.click(getByTestId('explore-food'));
    expect(getByTestId('explore-drinks')).toBeInTheDocument();
    fireEvent.click(getByTestId('explore-drinks'));
  })
})