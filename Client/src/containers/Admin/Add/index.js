import { connect } from 'react-redux';
import {
  selectCategoryId,
  changeNameValue,
  changePriceValue,
  changeStockValue,
  changeUnitValue,
  changeDescriptionValue,
  submitProduct,
  startLoading,
} from 'src/store/reducer';

import Add from 'src/components/Home/Admin/Add';


// Préparation
const mapStateToProps = (state) => ({
  commercant: state.commercant,
  categories: state.categories,
  userCommercant: state.userCommercant,
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
  handleSubmitProduct: (shopId) => {
    console.log('container', shopId);
    dispatch(submitProduct(shopId));
    dispatch(startLoading());
  },
});

// Container
const AddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add);

export default AddContainer;
