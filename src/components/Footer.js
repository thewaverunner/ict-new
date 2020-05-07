import React, { useState } from 'react';
import { Link } from 'gatsby';
import CommentLinesIcon from './Icons/CommentLinesIcon';
import '../styles/footer.sass';

const Footer = () => {
  const [currentLang, changeLang] = useState('English');
  const [showLange, toggleLang] = useState(false);
  return (
    <footer>
      <div className="container">
        <div className="menu">
          {/* eslint-disable-next-line */}
          <div
            className="lang"
            onClick={() => { toggleLang(!showLange); }}
          >
            <h3>
              <CommentLinesIcon />
              {currentLang}
            </h3>
            {showLange && (
              <div className="pop">
                <button
                  type="button"
                  onClick={() => { changeLang('English'); }}
                  className={currentLang === 'English' ? 'active' : ''}
                >
                  English
                  <CommentLinesIcon />
                </button>
                <button
                  type="button"
                  onClick={() => { changeLang('Espanol'); }}
                  className={currentLang === 'Espanol' ? 'active' : ''}
                >
                  Espanol
                  <CommentLinesIcon />
                </button>
                <button
                  type="button"
                  onClick={() => { changeLang('Chinese'); }}
                  className={currentLang === 'Chinese' ? 'active' : ''}
                >
                  Chinese
                  <CommentLinesIcon />
                </button>
              </div>
            )}
          </div>
          <div>
            <h3>
              <Link to=" /about">About</Link>
            </h3>
            <Link to="/">About ICT</Link>
            <Link to="/">Our Industry</Link>
            <Link to="/"> Our Business</Link>
            <Link to="/"> Questions & Answers</Link>
          </div>
          <div>
            <h3>
              <Link to="/">Responsibility</Link>
            </h3>
            <Link to="/"> Our Values</Link>
            <Link to="/"> Our Strategy</Link>
            <Link to="/"> CSR</Link>
            <Link to="/"> Challenges</Link>
          </div>
          <div>
            <h3>
              <Link to="/">Company</Link>
            </h3>
            <Link to="/"> Corporate Governance</Link>
            <Link to="/"> Our People</Link>
            <Link to="/"> Open Positions</Link>
            <Link to="/"> Pressroom</Link>
            <Link to="/"> Contact Us</Link>
          </div>
        </div>
        <div className="additional">
          <p>
            &copy; Impact Crowd Technology S.L. All Rights Reserved
          </p>
          <div>
            <Link to="#">Terms of use</Link>
            <Link to="#">Privcy Policy</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
