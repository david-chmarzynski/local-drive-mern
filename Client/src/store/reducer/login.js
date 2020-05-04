// Reducer to manage Register state

// --- initial state
const initialState = {
    email: null,
    password: null,
    isLogged: false,
  };
  
  // --- action types
  const STORE_EMAIL = 'STORE_EMAIL';
  const STORE_PASSWORD = "STORE_PASSWORD";
  const IS_LOGGED = "IS_LOGGED";
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
  
  // --- export
  export default reducer;