import axios from 'axios';

import { DELETE_PROMOTION, stopLoading, chargeDeletedDataPromotions, handleOpenSuccessModal } from 'src/store/reducer';

const deletePromotionMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_PROMOTION:
      axios({
        method: 'delete',
        url: 'http://15.188.195.37/api/v1/shop/sale/delete',
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
        data: { productId: store.getState().toDelete },
      })
        .then((response) => {
          const chargeDeletedDataPromotionsAction = chargeDeletedDataPromotions(response.data);
          store.dispatch(chargeDeletedDataPromotionsAction);
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

export default deletePromotionMiddleware;
