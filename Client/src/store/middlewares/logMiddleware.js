import axios from 'axios';

import { LOGGED, logUser, logCommercant, stopLoading, logOut } from '../reducer';

const logMiddleware = (store) => (next) => (action) => {
  // Blocage mode Admin/commercant
  const CommercantOff = () => {
    store.getState().isShop = false
  };

  switch (action.type) {
    case LOGGED:
      CommercantOff();
      logOut();
      axios({
        method: 'post',
        url: 'http://15.188.195.37/api/v1/login',
        data: {
        // eslint-disable-next-line
          "username": store.getState().email,
          "password": store.getState().password,
        },
      })
        .then((response) => {
          if (response.data === false) {
            alert('Mauvaise Email ou Mot de Passe')
          } else {
            const job = response.data[0].isShop;
            if (job === true) {
              const actionLogCommercant = logCommercant(
                response.data,
              );
              store.dispatch(actionLogCommercant);
            } else {
              const actionLogUser = logUser(
                response.data,
              )
              store.dispatch(actionLogUser);
            };
          }})
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

export default logMiddleware;

