import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

export default function AppProvider({ children }) {
const context = {}

return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
