// Reducer to manage ProductManager state

// --- initial state
const initialState = {
    products: null,
  };
  
  // --- action types
  export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
  const STORE_PRODUCTS ='STORE_PRODUCTS';
  const EMPTY_SHOP_PRODUCTS = 'EMPTY_SHOP_PRODUCTS';
  
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
  
  // --- export
  export default reducer;