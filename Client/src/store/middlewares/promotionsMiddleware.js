import axios from 'axios';

import { CHARGE_PROMOTIONS, stopLoading, chargeDataPromotions, changeDeletingCloseModal } from 'src/store/reducer';

const promotionsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHARGE_PROMOTIONS:
      axios({
        method: 'get',
        url: `http://15.188.195.37/api/v1/shop/${store.getState().userCommercant[0].id}/sale`,
      })
        .then((response) => {
          const changeDeletingCloseModalAction = changeDeletingCloseModal();
          store.dispatch(changeDeletingCloseModalAction);
          const chargeDataPromotionsAction = chargeDataPromotions(response.data);
          store.dispatch(chargeDataPromotionsAction);
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

export default promotionsMiddleware;
