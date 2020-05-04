// Reducer to manage Register state

// --- initial state
const initialState = {
    email: null,
    password: null,
    cpassword: null,
    isShop: false,
  };
  
  // --- action types
  const STORE_EMAIL = 'STORE_EMAIL';
  const STORE_PASSWORD = "STORE_PASSWORD";
  const STORE_CPASSWORD = "STORE_CPASSWORD";
  const STORE_IS_SHOP = "STORE_IS_SHOP";
  export const SUBMIT_NEW_USER = "SUBMIT_NEW_USER";
  
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
  
  // --- export
  export default reducer;