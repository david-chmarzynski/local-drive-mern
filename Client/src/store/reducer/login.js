// Reducer to manage Register state

// --- initial state
const initialState = {
    email: null,
    password: null,
    isLogged: null,
    currentUser: null,
    openSuccess: false,
    openFail: false,
  };
  
  // --- action types
  const STORE_EMAIL = 'STORE_EMAIL';
  const STORE_PASSWORD = "STORE_PASSWORD";
  const IS_LOGGED = "IS_LOGGED";
  const FECTH_USER_DATA = "FECTH_USER_DATA";
  const FETCH_PRODUCT_DATA = 'FETCH_PRODUCT_DATA';
  const EMPTY_USER = "EMPTY_USER";
  const EMPTY_SHOP_PRODUCTS = 'EMPTY_SHOP_PRODUCTS';
  const OPEN_SUCCESS = "OPEN_SUCCESS";
  const OPEN_FAIL = "OPEN_FAIL";
  const CLOSE_SUCCESS = "CLOSE_SUCCESS";
  const CLOSE_FAIL = "CLOSE_FAIL";
  export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
  
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
        case IS_LOGGED:
            return {
              ...state,
              isLogged: action.isLogged,
            };
        case EMPTY_USER:
            return {
                ...state,
                currentUser: null,
                email: null,
                password: null,
            };
        case EMPTY_SHOP_PRODUCTS:
            return {
              ...state,
              shopProducts: null,
            };
        case FECTH_USER_DATA:
            return {
              ...state,
              currentUser: action.local,
            };
        case OPEN_SUCCESS:
            return {
              ...state,
              openSuccess: true,
            };
        case OPEN_FAIL:
            return {
              ...state,
              openFail: true,
            };
        case CLOSE_SUCCESS:
            return {
              ...state,
              openSuccess: false,
            };
        case CLOSE_FAIL:
            return {
              ...state,
              openFail: false,
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

  export const storeSubmitLogin = () => ({
    type: SUBMIT_LOGIN,
  });

  export const isLogged = (isLogged) => ({
      type: IS_LOGGED,
      isLogged,
  });

  export const fetchUserData = (local) => ({
    type: FECTH_USER_DATA,
    local,
  });

  export const emptyUser = () => ({
      type: EMPTY_USER
  });

  export const openSuccessModal = () => ({
    type: OPEN_SUCCESS
  });

  export const openFailModal = () => ({
    type: OPEN_FAIL
  });

  export const closeSuccessModal = () => ({
    type: CLOSE_SUCCESS
  });

  export const closeFailModal = () => ({
    type: CLOSE_FAIL
  }); 
  
  // --- export
  export default reducer;