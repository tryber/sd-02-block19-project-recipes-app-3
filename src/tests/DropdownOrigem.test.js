import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent, wait } from '@testing-library/react';
import AppProvider from '../Context/AppProvider';
import DropdownOrigem from '../Components/DropdownOrigem';

afterEach(cleanup);

describe('Dropdown Origem test', () => {
  test('render Dropdown', () => {
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <DropdownOrigem />
        </MemoryRouter>
      </AppProvider>,
    );
    const dropdown = getByTestId('explore-by-area-dropdown'); 
    expect(dropdown).toBeInTheDocument();
  });

  test('render options from Dropdown', () => {
    const { getByTestId } = render(
      <AppProvider>
        <MemoryRouter>
          <DropdownOrigem />
        </MemoryRouter>
      </AppProvider>,
    );
    const allOrigins = getByTestId('All-option'); 
    expect(allOrigins).toBeInTheDocument();
    fireEvent.click(allOrigins);
  });
});
