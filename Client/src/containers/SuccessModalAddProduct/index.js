import { connect } from 'react-redux';

import SuccessModalAddProduct from 'src/components/Home/SuccessModalAddProduct';


import { handleCloseSuccessModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  successModalBool: state.successModalBool,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSuccessModalStore: () => {
    dispatch(handleCloseSuccessModal());
  },

});

const SuccessModalAddProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessModalAddProduct);

// console.log(state);

export default SuccessModalAddProductContainer;
