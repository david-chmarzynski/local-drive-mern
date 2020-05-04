import { connect } from 'react-redux';

import SuccessModalAddPromotion from 'src/components/Home/SuccessModalAddPromotion';


import { handleCloseSuccessModal } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  successModalBool: state.successModalBool,
});

const mapDispatchToProps = (dispatch) => ({
  handleCloseSuccessModalStore: () => {
    dispatch(handleCloseSuccessModal());
  },

});

const SuccessModalAddPromotionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SuccessModalAddPromotion);

// console.log(state);

export default SuccessModalAddPromotionContainer;
