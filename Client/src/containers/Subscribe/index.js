import { connect } from 'react-redux';

import Subscribe from 'src/components/Home/Subscribe';


import { changeFieldValue, changeCommercant, changeCondition, subscribe, handleJobValue, startLoading } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  prenomValue: state.prenom,
  nomValue: state.nom,
  emailValue: state.email,
  passwordValue: state.password,
  confirmPasswordValue: state.confirmPassword,
  isShop: state.isShop,
  condition: state.condition,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },

  onHandleJob: (newValue) => {
    const action = handleJobValue(newValue);
    dispatch(action);
  },

  onClickChangeCommercant: () => {
    dispatch(changeCommercant());
  },

  onClickChangeCondition: () => {
    dispatch(changeCondition());
  },

  onSubmitBtn: () => {
    dispatch(subscribe());
    dispatch(startLoading());
  },

});

const SubscribeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Subscribe);

// console.log(state);

export default SubscribeContainer;
