import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../Context';

const HeaderName = ({ classHeader }) => (
  <h2 className={classHeader} data-testid="page-title">
    {useContext(RecipesContext).pageName}
  </h2>
);

export default HeaderName;

HeaderName.propTypes = {
  classHeader: PropTypes.string,
};

HeaderName.defaultProps = {
  classHeader: null,
};
