import { connect } from 'react-redux';

import HeaderDesk from 'src/components/V2/Layout/Header/HeaderDesk';
import { closeSuccessModal, closeFailModal } from 'src/store/reducer/login';
import { closeSuccessModalAccount, closeFailModalAccount } from 'src/store/reducer/account';
import { closeSuccessModalRegister, closeFailModalRegister } from 'src/store/reducer/register';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  currentUser: state.login.currentUser,

  openSuccess: state.login.openSuccess,
  openFail: state.login.openFail,
  
  openSuccessAccount: state.account.openSuccessAccount,
  openFailAccount: state.account.openFailAccount,
  
  openSuccessRegister: state.register.openSuccessRegister,
  openFailRegister: state.register.openFailRegister
});

const mapDispatchToProps = (dispatch) => ({

  handleCloseSuccessModal: () => {
    dispatch(closeSuccessModal());
  },

  handleCloseFailModal: () => {
    dispatch(closeFailModal());
  },

  handleCloseSuccessModalAccount: () => {
    dispatch(closeSuccessModalAccount());
  },

  handleCloseFailModalAccount: () => {
    dispatch(closeFailModalAccount());
  },
  
  handleCloseSuccessModalRegister: () => {
    dispatch(closeSuccessModalRegister());
  },

  handleCloseFailModalRegister: () => {
    dispatch(closeFailModalRegister());
  }
});

const HeaderDeskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderDesk);

export default HeaderDeskContainer;