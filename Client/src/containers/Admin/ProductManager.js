import { connect } from 'react-redux';

import ProductManager from 'src/components/V2/Admin/ProductManager';
import { fetchProducts } from 'src/store/reducer/Admin/productManager'

const mapStateToProps = (state) => ({
  shopProducts: state.productManager.products,
  shopProductsAdded: state.productAdd.products
});

const mapDispatchToProps = (dispatch) => ({

    handleFecthProducts: () => {
        dispatch(fetchProducts());
    },
});

const ProductManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductManager);

export default ProductManagerContainer;