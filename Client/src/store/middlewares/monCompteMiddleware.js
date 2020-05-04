import axios from 'axios';

import { SUBMIT_MODIF_USER, stopLoading, handleOpenSuccessModal, login } from 'src/store/reducer';

const monCompteMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_MODIF_USER:
      axios({
        method: 'put',
        url: `http://15.188.195.37/api/v1/user/${store.getState().user[0].id}/update`,
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
        data: {
          "firstname": store.getState().firstname,
          "lastname": store.getState().lastname,
          "email": store.getState().email,
          "number": store.getState().number,
          "street": store.getState().street,
          "zip": store.getState().zip,
          "city": store.getState().city,
          "phone": store.getState().phone,
        },
      })
        .then((response) => {
          const handleOpenSuccessModalAction = handleOpenSuccessModal();
          store.dispatch(handleOpenSuccessModalAction);
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

export default monCompteMiddleware;
