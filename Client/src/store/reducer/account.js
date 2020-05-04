// Reducer to manage Register state

// --- initial state
const initialState = {
    // isLogged: store.getState().login.isLogged,
  };
  
  // --- action types
  export const STORE_LOGOUT = 'STORE_LOGOUT';
  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  // --- action creators
  export const storeLogout = () => ({
    type: STORE_LOGOUT
  });
  
  // --- export
  export default reducer;