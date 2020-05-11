import React, { useContext } from 'react';
import RecipesContext from '../Context';
import PropTypes from 'prop-types';

const HeaderName = ({ style }) => (
  <h2 className={style ? style : null} data-testid="page-title">{useContext(RecipesContext).pageName}</h2>
);

export default HeaderName;

HeaderName.propTypes = {
  style: PropTypes.string,
}

HeaderName.defaultProps = {
  style: null,
};
