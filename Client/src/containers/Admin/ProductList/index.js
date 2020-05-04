import { connect } from 'react-redux';

import { changePromotionOpenModal, changePromotionCloseModal } from 'src/store/reducer/';
import ProductList from '../../../components/Home/Admin/ProductList';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openPromotionModal: state.openPromotionModal,
  products: state.promotions,
  loneProduct: state.loneProduct,
});

const mapDispatchToProps = (dispatch) => ({
  // Change the openModal state to true, the modal openning is making through it
  handleChangePromotionOpenModal: () => {
    dispatch(changePromotionOpenModal());
  },
  handleChangePromotionCloseModal: () => {
    dispatch(changePromotionCloseModal());
  },
});

// Container
const ProductListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);

export default ProductListContainer;
