import { connect } from 'react-redux';

import SuccessModal from 'src/components/Home/SuccessModal';


import { handleCloseSuccessModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  successModalBool: state.successModalBool,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSuccessModalStore: () => {
    dispatch(handleCloseSuccessModal());
  },

});

const SuccessModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessModal);

// console.log(state);

export default SuccessModalContainer;
