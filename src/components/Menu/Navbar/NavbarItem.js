/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'gatsby'

const NavbarItemEl = styled.li`
  position: relative;
`;

const DropdownSlot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  perspective: 1500px;
`;


const NavbarItem = ({ title, children, index, onMouseEnter: mouseEnterHandler }) => {
  const onMouseEnter = () => {
    mouseEnterHandler(index);
  };
  return (
    <NavbarItemEl onMouseEnter={onMouseEnter}
                  onFocus={onMouseEnter}
    >
      <Link to="/">{title}</Link>
      <DropdownSlot>{children}</DropdownSlot>
    </NavbarItemEl>
  );
};

NavbarItem.propTypes = {
  onMouseEnter: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default NavbarItem;
