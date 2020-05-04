import { connect } from 'react-redux';

import { changeDeletingCloseModal, changeDeletingOpenModal, deletePromotion, startLoading } from 'src/store/reducer/';
import Promotion from '../../../components/Home/Admin/Promotion';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openPromotionModal: state.openPromotionModal,
  openDeletingModal: state.openDeletingModal,
  promotions: state.promotions,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleChangeDeletingOpenModal: (id) => {
    dispatch(changeDeletingOpenModal(id));
  },
  handleChangeDeletingCloseModal: () => {
    dispatch(changeDeletingCloseModal());
  },
  handleDeletePromotionAdmin: () => {
    dispatch(deletePromotion());
    dispatch(startLoading());
  },
});

// Container
const PromotionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Promotion);

export default PromotionContainer;
