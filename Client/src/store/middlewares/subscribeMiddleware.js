import axios from 'axios';

import { SUBSCRIBE, stopLoading, login } from '../reducer';

const subscribeMiddleware = (store) => (next) => (action) => {
  let commercantStatus = true;
  if (store.getState().isShop === true) {
    commercantStatus = 'true';
  }
  else {
    commercantStatus = 'false';
  }
  switch (action.type) {
    case SUBSCRIBE:
      axios({
        method: 'post',
        url: 'http://15.188.195.37/register',
        data: {
        // eslint-disable-next-line
          "prenom": store.getState().prenom,
          "nom": store.getState().nom,
          "email": store.getState().email,
          "password": store.getState().password,
          "isShop": commercantStatus,
          "job": store.getState().job,
        }
      })
        .then((response) => {
          const actionLogin = login(
            response.data,
          );
          store.dispatch(actionLogin);
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

export default subscribeMiddleware;
