// Reducer to manage ProductAdd state

// --- initial state
const initialState = {
    name: null,
    description: null,
    price: null,
    unit: null,
    stock: null,
    shop_id: null,
    openSuccessAdd: false,
    openFailAdd: false,
  };
  
  // --- action types
  const CHANGE_NAME = 'CHANGE_NAME';
  const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
  const CHANGE_PRICE = 'CHANGE_PRICE';
  const CHANGE_UNIT = 'CHANGE_UNIT';
  const CHANGE_STOCK = 'CHANGE_STOCK';

  const OPEN_SUCCESS_ADD = "OPEN_SUCCESS_ADD";
  const OPEN_FAIL_ADD = "OPEN_FAIL_ADD";
  const CLOSE_SUCCESS_ADD = "CLOSE_SUCCESS_ADD";
  const CLOSE_FAIL_ADD = "CLOSE_FAIL_ADD";

  export const SUBMIT_ADD_PRODUCT = 'SUBMIT_ADD_PRODUCT';

  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_NAME:
        return {
          ...state,
          name: action.name,
        };
      case CHANGE_DESCRIPTION:
        return {
          ...state,
          description: action.description,
        };
      case CHANGE_PRICE:
        return {
          ...state,
          price: action.price,
        };
      case CHANGE_UNIT:
        return {
          ...state,
          unit: action.unit,
        };
      case CHANGE_STOCK:
        return {
          ...state,
          stock: action.stock,
        };
      case OPEN_SUCCESS_ADD:
        return {
          ...state,
          openSuccessAdd: true,
        };
      case CLOSE_SUCCESS_ADD:
        return {
          ...state,
          openSuccessAdd: false,
        };
      case OPEN_FAIL_ADD:
        return {
          ...state,
          openFailAdd: true,
        };
      case CLOSE_FAIL_ADD:
        return {
          ...state,
          openFailAdd: false,
        };
      default:
        return state;
    }
  };
  
  // --- action creators
  export const storeName = (name) => ({
    type: CHANGE_NAME,
    name,
  });

  export const storeDescription = (description) => ({
    type: CHANGE_DESCRIPTION,
    description,
  });

  export const storePrice = (price) => ({
    type: CHANGE_PRICE,
    price,
  });

  export const storeUnit = (unit) => ({
    type: CHANGE_UNIT,
    unit,
  });

  export const storeStock = (stock) => ({
    type: CHANGE_STOCK,
    stock,
  });

  export const storeSubmitAddProduct = () => ({
      type: SUBMIT_ADD_PRODUCT,
  });

  export const openSuccessModalAdd = () => ({
    type: OPEN_SUCCESS_ADD
  });

  export const openFailModalAdd = () => ({
    type: OPEN_FAIL_ADD
  });

  export const closeSuccessModalAdd = () => ({
    type: CLOSE_SUCCESS_ADD
  });

  export const closeFailModalAdd = () => ({
    type: CLOSE_FAIL_ADD
  });
  
  // --- export
  export default reducer;