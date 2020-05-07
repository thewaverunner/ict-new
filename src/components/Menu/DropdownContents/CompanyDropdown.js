/* eslint-disable */

import React from 'react';
import { Link } from 'gatsby';

const CompanyDropdown = () => {
  return (
    <div className="submenu">
      <Link to="/company/corporate-governance">Corporate Governance</Link>
      <Link to="/company/our-people">Our People</Link>
      <Link to="/company/open-positions">Open Positions</Link>
      <Link to="/company/pressroom">Pressroom</Link>
    </div>
  );
};

export default CompanyDropdown;
