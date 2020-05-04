import { connect } from 'react-redux';

import Admin from 'src/components/Home/Admin';
import { changeDeletingOpenModal, changeDeletingCloseModal, chargeCategories, chargeProducts, chargePromotions } from 'src/store/reducer';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openDeletingModal: state.openDeletingModal,
  promotions: state.promotions,
  userCommercant: state.userCommercant,
  productsCommercant: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleChangeDeletingOpenModal: () => {
    dispatch(changeDeletingOpenModal());
  },
  handleChangeDeletingCloseModal: () => {
    dispatch(changeDeletingCloseModal());
  },
  handleAddAdminMenu: () => {
    dispatch(chargeCategories());
  },
  handleModifyAdminMenu: () => {
    dispatch(chargeProducts());
    dispatch(chargeCategories());
  },
  handlePromotionAdminMenu: () => {
    dispatch(chargePromotions());
  },
  handleAddPromotionMenu: () => {
    dispatch(chargeProducts());
  },
});

// Container
const AdminContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Admin);

export default AdminContainer;
