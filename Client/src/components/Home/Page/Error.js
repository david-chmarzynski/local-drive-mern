import React from 'react';
import { NavLink } from 'react-router-dom';
import './error.scss';

const Error = () => (
  <div>
    <div id="error">
      <strong className="animated infinite pulse slow">404</strong>
    </div>
    <NavLink
      to="/"
      exact
    >
      <em className="animated bounceInUp slow">Cette Page N'existe Pas <a className="liens" href="">Revenir à l'accueil</a></em>
    </NavLink>
  </div>
);

export default Error;
