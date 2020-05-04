import axios from 'axios';

import { FETCH_DATA, receiveData, stopLoading } from 'src/store/reducer';

const ajaxMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_DATA:
      axios({
        method: 'post',
        url: 'http://15.188.195.37/api/v1/shop/search',
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
        data: {
        // eslint-disable-next-line
          "villeValue": store.getState().ville,
        },
      })
        .then((response) => {
          // console.log(response.data);
          const receiveDataAction = receiveData(response.data);
          store.dispatch(receiveDataAction);
        })
        .catch((error) => {
          // console.error permet d'afficher une erreur dans la console
          console.error(error);
        })
        .finally(() => {
          const stopLoadingAction = stopLoading();
          store.dispatch(stopLoadingAction);
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default ajaxMiddleware;
