import React from 'react';
import { Link } from 'gatsby';
import AnimatedNavbar from './Menu/AnimatedNavbar';
import '../styles/header.sass';

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <img
          src="logo.svg"
          alt="logo"
        />
      </div>
      <nav>
        <AnimatedNavbar duration={300} />
        <div>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
