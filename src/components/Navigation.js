import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/images/logo-text.webp';

const Navigation = () => {
  return (
    <nav id="nav">
      <ul className="icons labeled">
        <li>
          <a href="https://www.objectpress.io">
            <img src={Logo} className="logo" alt="Object Press" />
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
