import React from 'react';
import styled from 'styled-components';

const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
`;


const Navbar = ({ children, onMouseLeave }) => (
  <NavbarEl onMouseLeave={onMouseLeave}>
    <NavbarList>{children}</NavbarList>
  </NavbarEl>
);
export default Navbar;
