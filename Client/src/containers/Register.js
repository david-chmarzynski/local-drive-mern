import { connect } from 'react-redux';

import Register from 'src/components/Layout/Log/Register';

import { storeEmail, storePassword, storeCPassword, storeIsShop, storeSubmitNewUser, storeSubmitNewShop } from 'src/store/reducer/register';

const mapStateToProps = (state) => ({
  storedPassword: state.register.password,
  storedCPassword: state.register.cpassword,
  storedIsShop: state.register.isShop
});

const mapDispatchToProps = (dispatch) => ({

  handleChangeEmail: (email) => {
    dispatch(storeEmail(email));
  },

  handleChangePassword: (password) => {
    dispatch(storePassword(password));
  },

  handleChangeCPassword: (cpassword) => {
    dispatch(storeCPassword(cpassword));
  },

  handleChangeIsShop: () => {
    dispatch(storeIsShop());
  },

  handleSubmitNewUser: () => {
    dispatch(storeSubmitNewUser());
  },

  handleSubmitNewShop: () => {
    dispatch(storeSubmitNewShop());
  },
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;