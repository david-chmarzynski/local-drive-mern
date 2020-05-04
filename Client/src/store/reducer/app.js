// Reducer to manage App state

// --- initial state
const initialState = {
  heightPage: null,
};

// --- action types
const PAGE_DOWN = 'PAGE_DOWN';

// --- Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PAGE_DOWN:
      return {
        ...state,
        heightPage: action.heightPage,
      };

    default:
      return state;
  }
};

// --- action creators
export const pageDowned = (heightPage) => ({
  type: PAGE_DOWN,
  heightPage,
});

// --- export
export default reducer;
