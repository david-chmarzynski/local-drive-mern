import { connect } from 'react-redux';

import MonCompte from 'src/components/Home/MonCompte';


import {
  changeInfoEmail,
  changeInfoFirstname,
  changeInfoLastname,
  changeInfoNumber,
  changeInfoStreet,
  changeInfoZip,
  changeInfoCity,
  changeInfoPhone,
  submitModifUser,
  startLoading,
} from 'src/store/reducer';

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  HandleChangeInfoEmail: (email, idUser) => {
    dispatch(changeInfoEmail(email, idUser));
  },
  HandleChangeInfoLastname: (lastname) => {
    dispatch(changeInfoLastname(lastname));
  },
  HandleChangeInfoFirstname: (firstname) => {
    dispatch(changeInfoFirstname(firstname));
  },
  HandleChangeInfoNumber: (number) => {
    dispatch(changeInfoNumber(number));
  },
  HandleChangeInfoStreet: (street) => {
    dispatch(changeInfoStreet(street));
  },
  HandleChangeInfoZip: (zip) => {
    dispatch(changeInfoZip(zip));
  },
  HandleChangeInfoCity: (city) => {
    dispatch(changeInfoCity(city));
  },
  HandleChangeInfoPhone: (phone) => {
    dispatch(changeInfoPhone(phone));
  },

  HandleSubmit: () => {
    dispatch(submitModifUser());
    dispatch(startLoading());
  },

});

const MonCompteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MonCompte);

// console.log(state);

export default MonCompteContainer;
