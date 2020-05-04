import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

// == Components Import
import Login from 'src/containers/Login';
import SearchBar from 'src/components/V2/SearchBar';
import Account from 'src/containers/Account';

import './headerdesk.scss';

import LoginSuccess from 'src/components/V2/Layout/Log/LoginSuccess';
import LoginFail from 'src/components/V2/Layout/Log/LoginFail';

const HeaderDesk = ({ isLogged, currentUser, openFail, openSuccess, handleCloseSuccessModal, handleCloseFailModal, }) => {

  // Login Modal Hook
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="header-desk">
      <div id="header-desk-logo">
        <img src="/src/img/g1114.png" alt="Local Drive Logo" />
      </div>
      <ul id="header-desk-icons">
        <SearchBar />
        <Icon name="map marker alternate" size="big" />
        <Icon name="user" size="big" onClick={handleShow} />
        {show && !isLogged && (
          // Giving needed props to Login
          <Login show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} />
        )}
        {show && isLogged && (
          <Account show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} currentUser={currentUser} />
        )}
        {openSuccess !== null && (
          <LoginSuccess show={openSuccess} handleClose={handleCloseSuccessModal} />
        )}
        {openFail && (
          <LoginFail show={openFail} handleClose={handleCloseFailModal} />
        )}
        <Icon name="cart" size="big" />
      </ul>
    </div>
  );
};

export default HeaderDesk;
