// Reducer to manage Register state

// --- initial state
const initialState = {
    email: null,
    password: null,
    cpassword: null,
    isShop: false,
    openSuccessRegister: false,
    openFailRegister: false,
  };
  
  // --- action types
  const STORE_EMAIL = 'STORE_EMAIL';
  const STORE_PASSWORD = "STORE_PASSWORD";
  const STORE_CPASSWORD = "STORE_CPASSWORD";
  const STORE_IS_SHOP = "STORE_IS_SHOP";
  const EMPTY_USER = "EMPTY_USER";

  const OPEN_SUCCESS_REGISTER = "OPEN_SUCCESS_REGISTER";
  const OPEN_FAIL_REGISTER = "OPEN_FAIL_REGISTER";
  const CLOSE_SUCCESS_REGISTER = "CLOSE_SUCCESS_REGISTER";
  const CLOSE_FAIL_REGISTER = "CLOSE_FAIL_REGISTER";

  export const SUBMIT_NEW_USER = "SUBMIT_NEW_USER";
  export const SUBMIT_NEW_SHOP = "SUBMIT_NEW_SHOP";
  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case STORE_EMAIL:
        return {
          ...state,
          email: action.email,
        };
      case STORE_PASSWORD:
        return {
          ...state,
          password: action.password,
        };
      case STORE_CPASSWORD:
        return {
          ...state,
          cpassword: action.cpassword,
        };
      case STORE_IS_SHOP:
        return {
          ...state,
          isShop: !state.isShop,
        };
      case EMPTY_USER:
        return {
          ...state,
          email: null,
          password: null,
          cpassword: null
        };
      case OPEN_SUCCESS_REGISTER:
        return {
          ...state,
          openSuccessRegister: true,
        };
      case CLOSE_SUCCESS_REGISTER:
        return {
          ...state,
          openSuccessRegister: false,
        };
      case OPEN_FAIL_REGISTER:
        return {
          ...state,
          openFailRegister: true,
        };
      case CLOSE_FAIL_REGISTER:
        return {
          ...state,
          openFailRegister: false,
        };
  
      default:
        return state;
    }
  };
  
  // --- action creators
  export const storeEmail = (email) => ({
    type: STORE_EMAIL,
    email,
  });

  export const storePassword = (password) => ({
    type: STORE_PASSWORD,
    password,
  });

  export const storeCPassword = (cpassword) => ({
    type: STORE_CPASSWORD,
    cpassword,
  });

  export const storeIsShop = () => ({
    type: STORE_IS_SHOP
  });

  export const storeSubmitNewUser = () => ({
    type: SUBMIT_NEW_USER,
  });

  export const storeSubmitNewShop = () => ({
    type: SUBMIT_NEW_SHOP,
  });

  export const emptyUserRegister = () => ({
    type: EMPTY_USER
  });

  export const openSuccessModalRegister = () => ({
    type: OPEN_SUCCESS_REGISTER
  });

  export const openFailModalRegister = () => ({
    type: OPEN_FAIL_REGISTER
  });

  export const closeSuccessModalRegister = () => ({
    type: CLOSE_SUCCESS_REGISTER
  });

  export const closeFailModalRegister = () => ({
    type: CLOSE_FAIL_REGISTER
  });
  
  // --- export
  export default reducer;