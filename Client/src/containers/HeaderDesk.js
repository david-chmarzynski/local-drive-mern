import { connect } from 'react-redux';

import HeaderDesk from 'src/components/V2/Layout/Header/HeaderDesk';
import { closeSuccessModal, closeFailModal } from 'src/store/reducer/login';


const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  currentUser: state.login.currentUser,
  openSuccess: state.login.openSuccess,
  openFail: state.login.openFail
});

const mapDispatchToProps = (dispatch) => ({

  handleCloseSuccessModal: () => {
    dispatch(closeSuccessModal());
  },

  handleCloseFailModal: () => {
    dispatch(closeFailModal());
  }
});

const HeaderDeskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderDesk);

export default HeaderDeskContainer;