// Reducer to manage ProductManager state

// --- initial state
const initialState = {
    products: null,
    productToDelete: null,
  };
  
  // --- action types
  export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
  export const DELETE_PRODUCT = 'DELETE_PRODUCT';
  const STORE_PRODUCTS ='STORE_PRODUCTS';
  const EMPTY_SHOP_PRODUCTS = 'EMPTY_SHOP_PRODUCTS';
  const STORE_PRODUCT_DELETE = 'STORE_PRODUCT_DELETE';
  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case STORE_PRODUCTS:
        return {
          ...state,
          products: action.products,
        };
      case EMPTY_SHOP_PRODUCTS:
        return {
          ...state,
          products: null
        };
      case STORE_PRODUCT_DELETE:
        return {
          ...state,
          productToDelete: action.productId
        };
        
      default:
        return state;
    }
  };
  
  // --- action creators
  export const fetchProducts = () => ({
    type: FETCH_PRODUCTS,
  });

  export const storeProducts = (products) => ({
    type: STORE_PRODUCTS,
    products,
  });

  export const emptyShopProducts = () => ({
    type: EMPTY_SHOP_PRODUCTS
  });

  export const storeProductDelete = (productId) => ({
    type: STORE_PRODUCT_DELETE,
    productId
  });

  export const deleteProduct = () => ({
    type: DELETE_PRODUCT,
  });
  
  // --- export
  export default reducer;