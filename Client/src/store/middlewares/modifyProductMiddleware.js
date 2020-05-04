import axios from 'axios';

import { MODIFIED_PRODUCT, stopLoading, chargeModifiedDataProducts, handleOpenSuccessModal } from 'src/store/reducer';

const modifyProductMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    case MODIFIED_PRODUCT:
      axios({
        method: 'put',
        url: `http://15.188.195.37/api/v1/product/${store.getState().loneProduct.id}/update`,
        headers: {
          Authorization: `Bearer ${store.getState().token}`,
        },
        data: {
        // eslint-disable-next-line
          "shopId": store.getState().shopId,
        // categoryId => menu déroulant
          "categoryId": store.getState().categoryId,
        // Suivants: Entrées manuelles dans le menu Admin
          "name": store.getState().name,
          "image": store.getState().image,
          "price": store.getState().price,
          "sale": store.getState().sale,
          "description": store.getState().description,
          "unit": store.getState().unit,
          "stock": store.getState().stock,
        },
      })
        .then((response) => {
          const handleOpenSuccessModalAction = handleOpenSuccessModal();
          store.dispatch(handleOpenSuccessModalAction);
          const chargeModifiedDataProductsAction = chargeModifiedDataProducts(response.data);
          store.dispatch(chargeModifiedDataProductsAction);
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

export default modifyProductMiddleware;
