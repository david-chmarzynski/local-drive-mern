import axios from 'axios';

import { CHARGE_CATEGORIES, stopLoading, chargeDataCategories } from 'src/store/reducer';

const categoriesMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case CHARGE_CATEGORIES:
      axios({
        method: 'get',
        url: 'http://15.188.195.37/api/v1/category/',
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          const chargeDataCategoriesAction = chargeDataCategories(response.data);
          store.dispatch(chargeDataCategoriesAction);
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

export default categoriesMiddleware;
