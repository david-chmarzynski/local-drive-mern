import axios from 'axios';

import { stopLoading, SHOP_CHOIX_RESULT, chargeUserShopProducts } from 'src/store/reducer';

const shopChoixMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SHOP_CHOIX_RESULT:
      axios({
        method: 'get',
        url: `http://15.188.195.37/api/v1/shop/${store.getState().userShopChoixId}`,
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          const products = response.data.products;
          store.dispatch(chargeUserShopProducts(products));
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

export default shopChoixMiddleware;
