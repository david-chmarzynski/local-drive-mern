import { connect } from 'react-redux';

import { changeDeletingOpenModal, insertProductStore } from 'src/store/reducer/';
import Modify from '../../../components/Home/Admin/Modify';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openPromotionModal: state.openPromotionModal,
  openDeletingModal: state.openDeletingModal,
  productsCommercant: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleChangeDeletingOpenModal: (id) => {
    dispatch(changeDeletingOpenModal(id));
  },
  handleGiveProductStore: (product) => {
    dispatch(insertProductStore(product));
  },

});

// Container
const ModifyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modify);

export default ModifyContainer;
