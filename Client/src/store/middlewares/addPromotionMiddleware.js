import axios from 'axios';

import { INSERT_PROMOTION, stopLoading, handleOpenSuccessModal } from 'src/store/reducer';

const addPromotionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case INSERT_PROMOTION:
      axios({
        method: 'put',
        url: 'http://15.188.195.37/api/v1/shop/sale/update',
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
        data: {
          "productId": store.getState().loneProduct.id,
          "sale": store.getState().toSale,
        },
      })
        .then((response) => {
          const handleOpenSuccessModalAction = handleOpenSuccessModal();
          store.dispatch(handleOpenSuccessModalAction);
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

export default addPromotionMiddleware;
