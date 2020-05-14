import { connect } from 'react-redux';

import ProductManager from 'src/components/V2/Admin/ProductManager';
import { fetchProducts, deleteProduct, storeProductDelete } from 'src/store/reducer/Admin/productManager'

const mapStateToProps = (state) => ({
  shopProducts: state.productManager.products,
  shopProductsAdded: state.productAdd.products
});

const mapDispatchToProps = (dispatch) => ({

    handleFecthProducts: () => {
      dispatch(fetchProducts());
    },

    handleStoreProductToDelete: productId => {
      dispatch(storeProductDelete(productId))
    },

    handleDeleteProduct: () => {
      dispatch(deleteProduct())
    },
});

const ProductManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductManager);

export default ProductManagerContainer;