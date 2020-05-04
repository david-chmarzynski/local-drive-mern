import { connect } from 'react-redux';

import SubMenu from 'src/components/Home/Header/SubMenu';

import { logOut, changeFieldValue, changeOpenSubMenu, changeOpenModal, changeCloseModal, changeCommercant } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  // Needed state into SubMenu component
  isShop: state.isShop,
  logged: state.logged,
  openSubMenu: state.openSubMenu,
  openModal: state.openModal,
  emailValue: state.emailValue,
  passwordValue: state.passwordValue,
  user: state.user,
  // onFieldChange
  // onSubmitBtn,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleClickDeploySubMenu: () => {
    dispatch(changeOpenSubMenu());
  },
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
  onFieldChange: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },
  logOut: () => {
    dispatch(logOut());
  },
});

const SubMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubMenu);

export default SubMenuContainer;
