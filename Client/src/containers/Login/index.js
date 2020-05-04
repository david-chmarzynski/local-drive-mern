import { connect } from 'react-redux';

import Login from 'src/components/Home/Login';

import { changeFieldValue, changeCommercant, login, startLoading } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  emailValue: state.email,
  passwordValue: state.password,
  isShop: state.isShop,
  logged: state.logged,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },
  onSubmitBtn: () => {
    dispatch(login());
    const action = login();
    dispatch(action);
    dispatch(startLoading());
  },
  onClickChangeCommercant: () => {
    dispatch(changeCommercant());
  },
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default LoginContainer;
