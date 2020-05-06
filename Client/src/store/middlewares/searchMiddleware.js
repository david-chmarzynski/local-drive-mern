import axios from 'axios';

import { SUBMIT_SEARCH, storeResults } from 'src/store/reducer/searchbar';



const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      axios({
        method: 'post',
        url: 'http://localhost:3000/cities/search',
        data: {
          name: store.getState().searchbar.search,
        },
      })
        .then((response) => {
            const result = response.data.result;
            store.dispatch(storeResults(result));
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default searchMiddleware;