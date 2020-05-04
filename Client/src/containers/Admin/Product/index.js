import { connect } from 'react-redux';

import {
  selectCategoryId,
  changeNameValue,
  changePriceValue,
  changeStockValue,
  changeUnitValue,
  changeDescriptionValue,
  submitModifiedProduct,
  startLoading,
} from 'src/store/reducer/';
import Product from '../../../components/Home/Admin/Product';

// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  openPromotionModal: state.openPromotionModal,
  openDeletingModal: state.openDeletingModal,
  productsCommercant: state.products,
  loneProduct: state.loneProduct,
  categories: state.categories,
  userCommercant: state.userCommercant,
  name: state.name,
  image: state.image,
  price: state.price,
  sale: state.sale,
  descriptionProduit: state.description,
  unit: state.unit,
  stock: state.stock,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
// Change the openModal state to true, the modal openning is making through it
  handleSelectCategory: (id) => {
    dispatch(selectCategoryId(id));
  },
  handleChangeNameValue: (name) => {
    dispatch(changeNameValue(name));
  },
  handleChangePriceValue: (price) => {
    dispatch(changePriceValue(price));
  },
  handleChangeStockValue: (stock) => {
    dispatch(changeStockValue(stock));
  },
  handleChangeUnitValue: (unit) => {
    dispatch(changeUnitValue(unit));
  },
  handleChangeDescriptionValue: (description, shopId) => {
    dispatch(changeDescriptionValue(description, shopId));
  },
  handleSubmitModifiedProduct: (shopId) => {
    console.log('container', shopId);
    dispatch(submitModifiedProduct(shopId));
    dispatch(startLoading());
  },

});

// Container
const ProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Product);

export default ProductContainer;
