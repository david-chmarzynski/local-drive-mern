import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SubMenu from 'src/containers/Header/SubMenu';

import BasketMenu from 'src/components/Home/Header/BasketMenu';

import './menu-burger.scss';

const MenuBurger = ({
  openSubMenu,
  openBasketMenu,
  handleClickDeploySubMenu,
  handleClickDeployPanier,
}) => {
  const handleItemClick = () => {
    handleClickDeploySubMenu();
  };
  const handleBasketClick = () => {
    handleClickDeployPanier();
  };
  return (
    <div id="menu-burger">
      <Menu fixed="bottom">
        <Menu.Item
          position="left"
          name="menu-basket"
          active={openBasketMenu}
          onClick={handleBasketClick}
        >
          <Icon color="black" name="shopping basket" />
        </Menu.Item>
        <Menu.Item
          position="right"
          name="menu-burger"
          active={openSubMenu}
          onClick={handleItemClick}
        >
          <Icon color="black" name="bars" />
        </Menu.Item>
      </Menu>
      <SubMenu
        openSubMenu={openSubMenu}
        handleClickDeploySubMenu={handleClickDeploySubMenu}
      />
      <BasketMenu
        openBasketMenu={openBasketMenu}
        handleClickDeployPanier={handleClickDeployPanier}
      />
    </div>
  );
};

MenuBurger.propTypes = {
  openSubMenu: PropTypes.string.isRequired,
  handleClickDeploySubMenu: PropTypes.func.isRequired,
  openBasketMenu: PropTypes.bool.isRequired,
  handleClickDeployPanier: PropTypes.func.isRequired,
};
export default MenuBurger;
