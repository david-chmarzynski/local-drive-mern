import { connect } from 'react-redux';

import MenuBurger from 'src/components/Home/Header/MenuBurger';

import { changeOpenSubMenu, changeOpenBasketMenu } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Needed state into SubMenu component
  isShop: state.isShop,
  logged: state.logged,
  openSubMenu: state.openSubMenu,
  openBasketMenu: state.openBasketMenu,
  openModal: state.openModal,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleClickDeploySubMenu: () => {
    dispatch(changeOpenSubMenu());
  },
  handleClickDeployPanier: () => {
    dispatch(changeOpenBasketMenu());
  },
});

const MenuBurgerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBurger);

export default MenuBurgerContainer;
