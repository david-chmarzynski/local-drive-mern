import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.scss';

import { Icon } from 'semantic-ui-react';

const Footer = () => (
  <div id="footer">
    <div id="liensFooter">
      <NavLink
        to="/Mention"
        exact
      >
        <a className="liens" href="">Mentions Légales</a>
      </NavLink>
    </div>
    <div id="local-drive">
      <p id="local">Local-Drive © 2020</p>
    </div>
    <div id="social-links">
      <a href="https://www.facebook.com/local.drive.121">
        <Icon name="facebook" />
      </a>
      <Icon name="linkedin" />
      <Icon name="instagram" />
    </div>
  </div>
);


export default Footer;
