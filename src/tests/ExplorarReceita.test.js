import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import ExplorarReceita from '../Pages/ExplorarReceita';
import AppProvider from '../Context/AppProvider';

afterEach(cleanup);

describe('test explorar', () => {
  it('render explorar', async () => {
    delete global.window.location;
    const href = 'http://localhost:3000/explorar/comidas';
    global.window.location = { href, pathname: '/explorar/comidas' };
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <ExplorarReceita />
        </MemoryRouter>
      </AppProvider>,
    );
    expect(getByTestId('explore-by-ingredient')).toBeInTheDocument();
    fireEvent.click(getByTestId('explore-by-ingredient'));
    expect(getByTestId('explore-by-area')).toBeInTheDocument();
    fireEvent.click(getByTestId('explore-by-area'));
    expect(getByTestId('explore-surprise')).toBeInTheDocument();
    fireEvent.click(getByTestId('explore-surprise'));
  })
})