import { connect } from 'react-redux';

import { startLoading, changeDeletingOpenModal, insertProductStore, changePromotionOpenModal, changePromotionCloseModal, insertPromotionStore, insertToSaleStore, handleCloseOpenModInStore } from 'src/store/reducer/';
import ModifyProduct from '../../../components/Home/Admin/ModifyProduct';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openPromotionModal: state.openPromotionModal,
  openDeletingModal: state.openDeletingModal,
  productsCommercant: state.products,
  loading: state.loading,
});
const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleChangeDeletingOpenModal: (id) => {
    dispatch(changeDeletingOpenModal(id));
  },
  handleGiveProductStore: (product) => {
    dispatch(insertProductStore(product));
  },
  handleChangePromotionOpenModal: () => {
    dispatch(changePromotionOpenModal());
  },
  handleChangePromotionCloseModal: () => {
    dispatch(changePromotionCloseModal());
  },
  handleAddPromotionStore: (loneProduct) => {
    dispatch(insertPromotionStore(loneProduct));
    dispatch(startLoading());
  },
  handleAddToSaleStore: (toSale) => {
    dispatch(insertToSaleStore(toSale));
  },
  handleCloseOpenModStore: () => {
    dispatch(handleCloseOpenModInStore());
  },

});

// Container
const ModifyProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModifyProduct);

export default ModifyProductContainer;
