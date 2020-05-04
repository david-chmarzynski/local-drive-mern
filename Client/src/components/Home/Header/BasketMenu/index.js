import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import Panier from 'src/containers/Panier';
import './basket-menu.scss';

const BasketMenu = ({ openBasketMenu }) => {

  return (
    <div id="menu-sub-menu">
      <Menu
        fluid
        fixed="bottom"
        // tabular="left"
        id={openBasketMenu === false && 'inactive'}
        trigger={(
          <Menu.Item name="menu-burger">
            <Icon name="shopping basket" />
          </Menu.Item>
        )}
        vertical
      >
        <Menu.Item>
          <Panier />
        </Menu.Item>
      </Menu>
    </div>
  );
};

BasketMenu.propTypes = {
  openBasketMenu: PropTypes.bool.isRequired,
};
export default BasketMenu;
