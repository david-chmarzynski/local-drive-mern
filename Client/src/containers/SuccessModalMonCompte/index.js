import { connect } from 'react-redux';

import SuccessModalMonCompte from 'src/components/Home/SuccessModalMonCompte';


import { handleCloseSuccessModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  successModalBool: state.successModalBool,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSuccessModalStore: () => {
    dispatch(handleCloseSuccessModal());
  },

});

const SuccessModalMonCompteContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessModalMonCompte);

// console.log(state);

export default SuccessModalMonCompteContainer;
