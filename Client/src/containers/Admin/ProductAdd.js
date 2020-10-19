import { connect } from 'react-redux';

import ProductAdd from 'src/components/Admin/ProductManager/ProductAdd';
import { storeName, storeDescription, storePrice, storeUnit, storeStock, storeSubmitAddProduct, closeSuccessModalAdd, closeFailModalAdd, storeUploadImage, storeImagePath  } from 'src/store/reducer/Admin/productAdd';

const mapStateToProps = (state) => ({
    openSuccessAdd: state.productAdd.openSuccessAdd,
    openFailAdd: state.productAdd.openFailAdd,
    file: state.productAdd.image,
});

const mapDispatchToProps = (dispatch) => ({

    handleChangeName: (name) => {
        dispatch(storeName(name));
    },

    handleChangeDescription: (description) => {
        dispatch(storeDescription(description));
    },

    handleChangePrice: (price) => {
        dispatch(storePrice(price));
    },

    handleChangeUnit: (unit) => {
        dispatch(storeUnit(unit));
    },

    handleChangeStock: (stock) => {
        dispatch(storeStock(stock));
    },

    handleSubmitAddProduct: () => {
        dispatch(storeSubmitAddProduct());
    },

    handleCloseSuccessModalAdd: () => {
        dispatch(closeSuccessModalAdd());
    },

    handleCloseFailModalAdd: () => {
        dispatch(closeFailModalAdd());
    },

    handleChangeUploadImageComp: (image) => {
        dispatch(storeUploadImage(image));
    },

    handleStoreImagePath: (path) => {
        dispatch(storeImagePath(path));
    },
});

const ProductAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductAdd);

export default ProductAddContainer;