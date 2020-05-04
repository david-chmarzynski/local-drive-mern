import { connect } from 'react-redux';

import Register from 'src/components/V2/Layout/Log/Register';

import { storeEmail, storePassword, storeCPassword, storeIsShop, storeSubmitNewUser } from 'src/store/reducer/register';

const mapStateToProps = (state) => ({
  storedPassword: state.register.password,
  storedCPassword: state.register.cpassword
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
});

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

export default RegisterContainer;