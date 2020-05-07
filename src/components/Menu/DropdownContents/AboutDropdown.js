/* eslint-disable */
import React from 'react';
import { Link } from 'gatsby';

const AboutDropdown = () => {
  return (
    <div className="submenu">
      <Link to="/about/our-industry">Our Industry</Link>
      <Link to="/about/our-company">Our Company</Link>
      <Link to="/about/our-business">Our Business</Link>
      <Link to="/about/questions-and-answers">Questions & Answers</Link>
    </div>
  );
};

export default AboutDropdown;
