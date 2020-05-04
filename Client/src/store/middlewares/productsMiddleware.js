import axios from 'axios';

import { CHARGE_PRODUCTS, stopLoading, chargeDataProducts } from 'src/store/reducer';

const productsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case CHARGE_PRODUCTS:
      axios({
        method: 'get',
        url: `http://15.188.195.37/api/v1/shop/${store.getState().userCommercant[0].id}`,
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          const chargeDataProductsAction = chargeDataProducts(response.data);
          store.dispatch(chargeDataProductsAction);
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

export default productsMiddleware;
