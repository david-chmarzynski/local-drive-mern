import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

// == Components Import
import Login from 'src/containers/Login';
import SearchBar from 'src/components/V2/SearchBar';

import './headerdesk.scss';

const HeaderDesk = ({ isLogged }) => {

  // Login Modal Hook
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(isLogged);
  return (
    <div id="header-desk">
      <div id="header-desk-logo">
        <img src="/src/img/g1114.png" alt="Local Drive Logo" />
      </div>
      <ul id="header-desk-icons">
        <SearchBar />
        <Icon name="map marker alternate" size="big" />
        <Icon name="user" size="big" onClick={handleShow} />
        {show && (
          // Giving needed props to Login
          <Login show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        )}
        <Icon name="cart" size="big" />
      </ul>
    </div>
  );
};

export default HeaderDesk;
