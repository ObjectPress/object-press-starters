import React from 'react';
import { Link } from 'gatsby';
import LogoText from '../assets/images/logo-text.webp';

const Navigation = () => {
  return (
    <nav id="nav">
      <ul className="icons labeled">
        <li>
          <a href="https://www.objectpress.io">
            <img
              src={LogoText}
              className="logo"
              placeholder="blurred"
              alt="Object Press"
            />
          </a>
        </li>

        <li>
          <Link to={`/`} className="icon fa-home" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
