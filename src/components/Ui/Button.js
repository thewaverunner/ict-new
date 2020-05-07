import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import '../../styles/UI/button.sass';

const Button = ({
  children,
  onClick,
  link,
  icon,
  className,
  type,
}) => {
  const clickHandler = () => {
    onClick();
    if (link) {
      navigate(link);
    }
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`button ${icon ? 'icon' : ''} ${className} ${type}`}
    >
      {children}
      {icon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.isRequired,
  onClick: PropTypes.func,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'black',
  ]),
};

Button.defaultProps = {
  onClick: () => {},
  link: null,
  icon: null,
  className: '',
  type: '',
};

export default React.memo(Button);
