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
    products: null,
    image: null,
    path: null,
  };
  
  // --- action types
  const CHANGE_NAME = 'CHANGE_NAME';
  const CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION';
  const CHANGE_PRICE = 'CHANGE_PRICE';
  const CHANGE_UNIT = 'CHANGE_UNIT';
  const CHANGE_STOCK = 'CHANGE_STOCK';
  const STORE_UPLOAD_IMAGE = 'STORE_UPLOAD_IMAGE';

  const OPEN_SUCCESS_ADD = "OPEN_SUCCESS_ADD";
  const OPEN_FAIL_ADD = "OPEN_FAIL_ADD";
  const CLOSE_SUCCESS_ADD = "CLOSE_SUCCESS_ADD";
  const CLOSE_FAIL_ADD = "CLOSE_FAIL_ADD";

  export const SUBMIT_ADD_PRODUCT = 'SUBMIT_ADD_PRODUCT';
  export const FETCH_PRODUCTS_ADDED = 'FETCH_PRODUCTS_ADDED';
  const STORE_PRODUCTS_ADDED = 'STORE_PRODUCTS_ADDED';
  const STORE_IMAGE_PATH = 'STORE_IMAGE_PATH';

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
      case STORE_PRODUCTS_ADDED:
          return {
            ...state,
            products: action.products
          };
      case STORE_UPLOAD_IMAGE:
          return {
            ...state,
            image: action.image
          };
      case STORE_IMAGE_PATH:
        return {
          ...state,
          path: action.path
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

  export const fetchProductsAdded = () => ({
    type: FETCH_PRODUCTS_ADDED
  });

  export const storeProductsAdded = (products) => ({
    type: STORE_PRODUCTS_ADDED,
    products
  });

  export const storeUploadImage = (image) => ({
    type: STORE_UPLOAD_IMAGE,
    image
  });

  export const storeImagePath = (path) => ({
    type: STORE_IMAGE_PATH,
    path
  });
  
  // --- export
  export default reducer;