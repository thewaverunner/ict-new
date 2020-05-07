import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/UI/subtitle.sass';

const Subtitle = ({ children, type }) => (
  <p className={`subtitle ${type}`}>{children}</p>
);

Subtitle.defaultProps = {
  type: '',
};

Subtitle.propTypes = {
  children: PropTypes.isRequired,
  type: PropTypes.oneOf([
    'black',
  ]),
};

export default Subtitle;
