// Reducer to manage Register state

// --- initial state
const initialState = {
    openSuccessAccount: false,
    openFailAccount: false,
  };
  
  // --- action types
  const OPEN_SUCCESS_ACCOUNT = "OPEN_SUCCESS_ACCOUNT";
  const OPEN_FAIL_ACCOUNT = "OPEN_FAIL_ACCOUNT";
  const CLOSE_SUCCESS_ACCOUNT = "CLOSE_SUCCESS_ACCOUNT";
  const CLOSE_FAIL_ACCOUNT = "CLOSE_FAIL_ACCOUNT";
  export const STORE_LOGOUT = 'STORE_LOGOUT';
  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case OPEN_SUCCESS_ACCOUNT:
        return {
          ...state,
          openSuccessAccount: true,
        };
      case CLOSE_SUCCESS_ACCOUNT:
        return {
          ...state,
          openSuccessAccount: false,
        };
      case OPEN_FAIL_ACCOUNT:
        return {
          ...state,
          openFailAccount: true,
        };
      case CLOSE_FAIL_ACCOUNT:
        return {
          ...state,
          openFailAccount: false,
        };
      default:
        return state;
    }
  };
  
  // --- action creators
  export const storeLogout = () => ({
    type: STORE_LOGOUT
  });

  export const openSuccessModalAccount = () => ({
    type: OPEN_SUCCESS_ACCOUNT
  });

  export const openFailModalAccount = () => ({
    type: OPEN_FAIL_ACCOUNT
  });

  export const closeSuccessModalAccount = () => ({
    type: CLOSE_SUCCESS_ACCOUNT
  });

  export const closeFailModalAccount = () => ({
    type: CLOSE_FAIL_ACCOUNT
  });
  // --- export
  export default reducer;