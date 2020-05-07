import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UI/title.sass';

const Title = ({ children, type }) => (
  <h2 className={`title ${type}`}>
    {children}
  </h2>
);

Title.defaultProps = {
  type: '',
};

Title.propTypes = {
  children: PropTypes.isRequired,
  type: PropTypes.oneOf([
    'black',
  ]),
};

export default Title;
