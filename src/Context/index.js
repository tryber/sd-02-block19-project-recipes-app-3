import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext();

export default function AppProvider({ children }) {
  const [storeCriteria, setStoreCriteria] = useState('');

  const defineSearch = (input, searchCriteria) => {
    if (input !== '' && searchCriteria !== '') {
      setStoreCriteria(`${searchCriteria}${input.split(' ').join('_')}`);
    }
  };

  const context = { defineSearch, storeCriteria };
  return (
    <RecipesContext.Provider value={context}>
      {children}
    </RecipesContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
