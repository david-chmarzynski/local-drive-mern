import React from 'react';
import { Button, Modal, Icon, Popup } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


import './header.scss';
import 'semantic-ui-css/semantic.min.css';

import MenuBurger from 'src/containers/Header/MenuBurger';
import Login from 'src/containers/Login';
import Subscribe from 'src/containers/Subscribe';
import Panier from 'src/containers/Panier';

const Header = ({
  isShop,
  logged,
  openModal,
  handleChangeOpenModal,
  handleChangeCloseModal,
  logOut,
  handleChangeOpenModalPanier,
  panier,
}) => {
  const quantite = panier.length;
  const dynamicWidth = window.innerWidth;
  const handleOpenModalPanier = () => {
    handleChangeOpenModalPanier();
  };
  const handleOpenModal = () => {
    handleChangeOpenModal();
  };

  const handleCloseModal = () => {
    handleChangeCloseModal();
  };

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div id="header">
      {dynamicWidth >= 955
        && (
          <div id="header-sub">
            <div id="header-transparency">
              <NavLink
                to="/"
                exact
                className="navigation-item"
                activeClassName="navigation-item-active"
              >
                <img src="src/img/logo.svg" alt="Local Drive Logo" />
              </NavLink>
              <NavLink
                to="/Concept"
                exact
                className="navigation-item"
                activeClassName="navigation-item-active"
              >
                <Button className="HeaderBtn">Concept</Button>
              </NavLink>
              <NavLink
                to="/About"
                exact
                className="navigation-item"
                activeClassName="navigation-item-active"
              >
                <Button className="HeaderBtn">A Propos</Button>
              </NavLink>
              {isShop && logged && (
                <NavLink
                  to="/Admin"
                  exact
                  className="navigation-item"
                  activeClassName="navigation-item-active"
                >
                  <Button className="HeaderBtn">Admin</Button>
                </NavLink>
              )}
              {logged && !isShop && (
                <NavLink
                  to="/MonCompte"
                  exact
                  className="navigation-item"
                  activeClassName="navigation-item-active"
                >
                  <Button>Mon Compte</Button>
                </NavLink>
              )}
              {!logged && (
                <>
                  <div id="subscribe-btn">
                    <Modal
                      trigger={
                        <Button>S'inscrire</Button>
                      }
                      closeIcon
                      size="small"
                      centered={false}
                    >
                      <Modal.Content>
                        <Subscribe />
                      </Modal.Content>
                    </Modal>
                  </div>
                  <div id="login-btn">
                    <Modal
                      trigger={<Button onClick={handleOpenModal}>Se connecter</Button>}
                      closeIcon
                      size="small"
                      centered={false}
                      open={openModal}
                      onClose={handleCloseModal}
                    >
                      <Modal.Content id="login">
                        <Login />
                      </Modal.Content>
                    </Modal>
                  </div>
                </>
              )}
              {logged && (
                <NavLink
                  to="/"
                  exact
                  className="navigation-item"
                  activeClassName="navigation-item-active"
                >
                  <Button className="HeaderBtn" onClick={handleLogOut}>Deconnexion</Button>
                </NavLink>
              )}
              <div>
                {!isShop && (
                  <Popup
                    style={{ overflow: 'auto', maxHeight: '100vh', maxWidth: '100vw' }}
                    wide="very"
                    flowing
                    position="bottom right"
                    content={<Panier />}
                    on="click"
                    pinned
                    // trigger={<Icon name="shopping basket" size="big" id="basket" />}
                    trigger={(
                      <div id="basket">
                        <Icon.Group>
                          <Icon name='basket shopping' id="basket" size="big"/>
                          {quantite !== 0 && (
                            <Icon corner="top right" name="add" color="red" id="basket" size="massive">
                              <p id="tot">{quantite}</p>
                            </Icon>
                          )}
                        </Icon.Group>
                      </div>
                    )}
                    onOpen={handleOpenModalPanier}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      {dynamicWidth <= 954 && (
        <div>
          <div id="header-sub">
            <div id="header-transparency">
              <NavLink to="/">
                <img src="src/img/logo.svg" alt="Local Drive Logo" />
              </NavLink>
            </div>
          </div>
          <MenuBurger />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  panier: PropTypes.object.isRequired,
  isShop: PropTypes.bool.isRequired,
  logged: PropTypes.bool.isRequired,
  openModal: PropTypes.bool.isRequired,
  handleChangeOpenModal: PropTypes.func.isRequired,
  handleChangeCloseModal: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired,
  handleChangeOpenModalPanier: PropTypes.func.isRequired,
};

export default Header;
