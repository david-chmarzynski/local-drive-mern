import { connect } from 'react-redux';

import SuccessModalModifyProduct from 'src/components/Home/SuccessModalModifyProduct';


import { handleCloseSuccessModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  successModalBool: state.successModalBool,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSuccessModalStore: () => {
    dispatch(handleCloseSuccessModal());
  },

});

const SuccessModalModifyProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessModalModifyProduct);

// console.log(state);

export default SuccessModalModifyProductContainer;
