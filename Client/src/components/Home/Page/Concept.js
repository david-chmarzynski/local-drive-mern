import React from 'react';
import { Segment } from 'semantic-ui-react';

import './about.scss';

const Concept = () => (
  <div id="concept">
    <h2>Aperçu du fonctionnement de Local Drive :</h2>
    <h3>Si vous êtes client :</h3>
    <Segment>
      <video src="../src/img/user.mp4" controls />
      <h3>Si vous êtes commerçant :</h3>
      <video src="../src/img/shop.mp4" controls />
    </Segment>
  </div>

);

export default Concept;
