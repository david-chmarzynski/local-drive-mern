// Reducer to manage SearchBar state

// --- initial state
const initialState = {
    search: null,
    result: null,
  };
  
  // --- action types
  export const SUBMIT_SEARCH = 'SUBMIT_SEARCH';
  const STORE_RESULTS = 'STORE_RESULTS';
  const CHANGE_SEARCH = 'CHANGE_SEARCH';
  const EMPTY_RESULT = 'EMPTY_RESULT';
  
  // --- Reducer
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_SEARCH:
        return {
          ...state,
          search: action.search,
        };
      case STORE_RESULTS:
        return {
          ...state,
          result: action.result,
        };
      case EMPTY_RESULT:
        return {
          ...state,
          result: null,
        };
  
      default:
        return state;
    }
  };
  
  // --- action creators

  export const storeChangeSearch = (search) => ({
    type: CHANGE_SEARCH,
    search
  });

  export const storeSubmitSearch = () => ({
    type: SUBMIT_SEARCH,
  });

  export const storeResults = (result) => ({
      type: STORE_RESULTS,
      result
  });

  export const storeGetEmptyResult = () => ({
    type: EMPTY_RESULT
  });
  
  // --- export
  export default reducer;