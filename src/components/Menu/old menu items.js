import React from 'react';
import { Link } from 'gatsby';

const OldMenuItems = () => {
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
        <div className="submenu">
          <Link to="/about/our-industry">Our Industry</Link>
          <Link to="/about/our-company">Our Company</Link>
          <Link to="/about/our-business">Our Business</Link>
          <Link to="/about/questions-and-answers">Questions & Answers</Link>
        </div>
      </div>
      <div>
        <Link to="/responsibility">Responsibility</Link>
        <div className="submenu">
          <Link to="/responsibility/our-values">Our Values</Link>
          <Link to="/responsibility/our-strategy">Our Strategy</Link>
          <Link to="/responsibility/csr">CSR</Link>
          <Link to="/responsibility/challenges">Challenges</Link>
        </div>
      </div>
      <div>
        <Link to="/company">Company</Link>
        <div className="submenu">
          <Link to="/company/corporate-governance">Corporate Governance</Link>
          <Link to="/company/our-people">Our People</Link>
          <Link to="/company/open-positions">Open Positions</Link>
          <Link to="/company/pressroom">Pressroom</Link>
        </div>
      </div>
    </div>
  );
};

export default OldMenuItems;