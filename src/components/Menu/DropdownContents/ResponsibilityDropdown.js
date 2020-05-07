/* eslint-disable */
import React from 'react';
import { Link } from 'gatsby';

const ResponsibilityDropdown = () => {
  return (
    <div className="submenu">
      <Link to="/responsibility/our-values">Our Values</Link>
      <Link to="/responsibility/our-strategy">Our Strategy</Link>
      <Link to="/responsibility/csr">CSR</Link>
      <Link to="/responsibility/challenges">Challenges</Link>
    </div>
  );
};

export default ResponsibilityDropdown;
