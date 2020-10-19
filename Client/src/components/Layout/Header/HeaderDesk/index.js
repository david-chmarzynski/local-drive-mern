import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';

// == Components Import
import Login from 'src/containers/Login';
import SearchBar from 'src/containers/SearchBar';
import Account from 'src/containers/Account';
import Panier from 'src/components/Layout/Panier';

import './headerdesk.scss';

import LoginSuccess from 'src/components/Layout/Log/LoginSuccess';
import LoginFail from 'src/components/Layout/Log/LoginFail';
import LogoutSuccess from 'src/components/Layout/Header/HeaderDesk/LogoutSuccess';
import LogoutFail from 'src/components/Layout/Header/HeaderDesk/LogoutFail';
import RegisterSuccess from 'src/components/Layout/Log/RegisterSuccess';
import RegisterFail from 'src/components/Layout/Log/RegisterFail';
import { Link } from 'react-router-dom';

const HeaderDesk = ({
  isLogged, // STATUS EN LIGNE
  currentUser, // INFOS DU CURRENT USER

  openFail, // BOOL OUVERTURE MODAL FAIL CONNEXION
  openSuccess, // BOOL OUVERTURE MODAL SUCCESS CONNEXION

  openSuccessAccount, // BOOL OUVERTURE MODAL SUCCESS DECONNEXION
  openFailAccount, // BOOL OUVERTURE MODAL FAIL DECONNEXION

  openSuccessRegister, // BOOL OUVERTURE MODAL SUCCESS SIGNUP
  openFailRegister, // BOOL OUVERTURE MODAL FAIL SIGNUP

  handleCloseSuccessModal, // FONCTION FERMETURE MODAL SUCCESS LOGIN
  handleCloseFailModal, // FONCTION FERMETURE MODAL FAIL LOGIN

  handleCloseSuccessModalAccount, // FONCTION FERMETURE MODAL SUCCESS LOGOUT
  handleCloseFailModalAccount, // FONCTION FERMETURE MODAL FAIL LOGOUT

  handleCloseSuccessModalRegister, // FONCTION FERMETURE MODAL SUCCESS SIGNUP
  handleCloseFailModalRegister, // FONCTION FERMETURE MODAL FAIL SIGNUP
}) => {

  // Login Modal Hook
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [panier, setPanier] = useState(false);
  const handleOpenPanier = () => setPanier(true);
  const handleClosePanier = () => setPanier(false);

  return (
    <div id="header-desk">
      <Link to="/">
      <div id="header-desk-logo">
        <img src="/src/img/g1114.png" alt="Local Drive Logo" />
      </div>
      </Link>
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
        {openSuccess && (
          <LoginSuccess show={openSuccess} handleClose={handleCloseSuccessModal} />
        )}
        {openFail && (
          <LoginFail show={openFail} handleClose={handleCloseFailModal} />
        )}
        {openSuccessAccount && (
          <LogoutSuccess show={openSuccessAccount} handleClose={handleCloseSuccessModalAccount} />
        )}
        {openFailAccount && (
          <LogoutFail show={openFailAccount} handleClose={handleCloseFailModalAccount} />
        )}
        {openSuccessRegister && (
          <RegisterSuccess show={openSuccessRegister} handleClose={handleCloseSuccessModalRegister} />
        )}
        {openFailRegister && (
          <RegisterFail show={openFailRegister} handleClose={handleCloseFailModalRegister} />
        )}
        <Icon name="cart" size="big" onClick={handleOpenPanier} />
        {panier && (
          <Panier show={panier} handleClose={handleClosePanier} />
        )}
      </ul>
    </div>
  );
};

export default HeaderDesk;
