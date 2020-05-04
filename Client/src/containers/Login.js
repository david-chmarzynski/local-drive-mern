import { connect } from 'react-redux';

import Login from 'src/components/V2/Layout/Log/Login';

import { storeEmail, storePassword, storeSubmitLogin, closeSuccessModal, closeFailModal } from 'src/store/reducer/login';

const mapStateToProps = (state) => ({
  storedPassword: state.login.password,
  storedCPassword: state.login.cpassword,
  isLogged: state.login.isLogged,
});

const mapDispatchToProps = (dispatch) => ({

  handleChangeEmail: (email) => {
    dispatch(storeEmail(email));
  },

  handleChangePassword: (password) => {
    dispatch(storePassword(password));
  },

  handleSubmitLogin: () => {
    dispatch(storeSubmitLogin());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;