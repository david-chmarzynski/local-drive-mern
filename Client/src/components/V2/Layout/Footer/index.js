import React from 'react';

import './footer.scss';
import { Icon } from 'semantic-ui-react';

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-links">
          <a href="#">Mentions Légales</a>
          <a href="#">A propos</a>
      </div>
      <div id="footer-copyright">
          <p>Tous droits réservés © Local Drive - 2020</p>
      </div>
      <div id="footer-social">
          <a href="#"><Icon name="facebook" size="big" /></a>
          <a href="#"><Icon name="github" size="big" /></a>
      </div>
    </div>
  );
};

export default Footer;
