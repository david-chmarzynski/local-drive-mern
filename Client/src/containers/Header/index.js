import { connect } from 'react-redux';

import Header from 'src/components/Home/Header';

import { changeCommercant, changeOpenModal, changeCloseModal, logOut, changeOpenModalPanier } from 'src/store/reducer';

const mapStateToProps = (state) => ({
// Needed state into Header component
  isShop: state.isShop,
  logged: state.logged,
  openModal: state.openModal,
  panier: state.panier,
});

const mapDispatchToProps = (dispatch) => ({

  handleChangeOpenModalPanier: () => {
    dispatch(changeOpenModalPanier());
  },
  // Change the openModal state to true, the modal openning is making through it
  handleChangeOpenModal: () => {
    dispatch(changeOpenModal());
  },
  // Change the openModal state to false, the modal closing is making through it
  handleChangeCloseModal: () => {
    dispatch(changeCloseModal());
  },
  // Change the commercant state, true if false / false if true
  onHandleClickCommercant: () => {
    dispatch(changeCommercant());
  },
  // Disconnect user, commercant go to false / logged go to false / openModal go to false ( else, automatically open the modal on click )
  logOut: () => {
    dispatch(logOut());
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;
