import { connect } from 'react-redux';

import ProductAdd from 'src/components/V2/Admin/ProductManager/ProductAdd';
import { storeName, storeDescription, storePrice, storeUnit, storeStock, storeSubmitAddProduct, closeSuccessModalAdd, closeFailModalAdd  } from 'src/store/reducer/Admin/productAdd';

const mapStateToProps = (state) => ({
    openSuccessAdd: state.productAdd.openSuccessAdd,
    openFailAdd: state.productAdd.openFailAdd
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
        dispatch(closeSuccessModalAdd())
    },

    handleCloseFailModalAdd: () => {
        dispatch(closeFailModalAdd())
    }
});

const ProductAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductAdd);

export default ProductAddContainer;