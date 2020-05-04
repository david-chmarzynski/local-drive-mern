import React from 'react';
import { Menu, Icon, Input, Modal, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './sub-menu.scss';
import { NavLink } from 'react-router-dom';

import Subscribe from 'src/containers/Subscribe';
import Login from 'src/containers/Login';

const SubMenu = ({
  openSubMenu,
  handleClickDeploySubMenu,
  handleChangeOpenModal,
  handleChangeCloseModal,
  logged,
  isShop,
  logOut,
  user,
}) => {
  const onHandleClickNavLink = () => {
    handleClickDeploySubMenu();
  };
  const handleOpenModal = () => {
    handleChangeOpenModal();
  };
  const handleCloseModal = () => {
    handleChangeCloseModal();
  };
  const handleClickDisconnect = () => {
    logOut();
  };
  return (
    <div id="menu-sub-menu">
      <Menu
        fluid
        vertical
        fixed="bottom"
        id={openSubMenu === false && 'inactive'}
        trigger={(
          <Menu.Item name="menu-burger">
            <Icon name="bars" />
          </Menu.Item>
    )}>
        {logged === true && isShop === false && (
          <h2>Bonjour {user[0].firstname} </h2>
        )}
        <Menu.Item id="search-bar-sub">
          <Input placeholder="Rechercher..." />
        </Menu.Item>
        <NavLink to="/" onClick={onHandleClickNavLink}>
          <Menu.Item>
            Accueil
          </Menu.Item>
        </NavLink>
        <NavLink to="/About" onClick={onHandleClickNavLink}>
          <Menu.Item>
            A propos
          </Menu.Item>
        </NavLink>
        <NavLink to="/Concept" onClick={onHandleClickNavLink}>
          <Menu.Item>
            Concept
          </Menu.Item>
        </NavLink>
        {logged && isShop === true && (
          <NavLink to="/Admin" onClick={onHandleClickNavLink}>
            <Menu.Item>
              Admin
            </Menu.Item>
          </NavLink>
        )}
        {logged === true && isShop === false && (
          <NavLink to="/MonCompte" onClick={onHandleClickNavLink}>
            <Menu.Item>
              Mon Compte
            </Menu.Item>
          </NavLink>
        )}
        {logged === false && (
        <div id="modal">
          <Modal
            trigger={(
              <Menu.Item>
                <Button onClick={handleOpenModal}>
                  S'inscrire
                </Button>
              </Menu.Item>
            )}
            closeIcon
            size="small"
            centered={false}
            onClose={handleCloseModal}
          >
            <Modal.Content>
              <Subscribe />
            </Modal.Content>
          </Modal>
          <div id="subscribe-btn">
            <Modal
              trigger={(
                <Menu.Item>
                  <Button onClick={handleOpenModal}>
                    Se Connecter
                  </Button>
                </Menu.Item>
              )}
              closeIcon
              size="small"
              centered={false}
              onClose={handleCloseModal}
            >
              <Modal.Content>
                <Login />
              </Modal.Content>
            </Modal>
          </div>
        </div>
        )}
        {logged === true && (
          <Menu.Item>
            <Button onClick={handleClickDisconnect}>Se Déconnecter</Button>
          </Menu.Item>
        )}
      </Menu>
    </div>
  );
};

SubMenu.propTypes = {
  openSubMenu: PropTypes.string.isRequired,
  handleClickDeploySubMenu: PropTypes.func.isRequired,
  emailValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onSubmitBtn: PropTypes.func.isRequired,
}.isRequired;

export default SubMenu;
