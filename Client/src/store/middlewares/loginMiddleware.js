import axios from 'axios';

import { LOGIN, stopLoading, logOut, logged, token } from '../reducer';

const loginMiddleware = (store) => (next) => (action) => {
  // Blocage mode Admin/commercant
  const CommercantOff = () => {
    store.getState().isShop = false;
  };

  switch (action.type) {
    case LOGIN:
      CommercantOff();
      logOut();
      axios({
        method: 'post',
        url: 'http://15.188.195.37/api/v1/login_check',
        data: {
        // eslint-disable-next-line
          "username": store.getState().email,
          "password": store.getState().password,
        },
      })
        .then((response) => {
          const value = response.data.token;
          store.dispatch(logged());
          store.dispatch(token(value));
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

export default loginMiddleware;

