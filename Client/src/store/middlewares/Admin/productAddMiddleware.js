import axios from 'axios';

import { SUBMIT_ADD_PRODUCT, openSuccessModalAdd, openFailModalAdd  } from 'src/store/reducer/Admin/productAdd';



const productAddMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_ADD_PRODUCT:
      axios({
        method: 'post',
        url: 'http://localhost:3000/admin/add/product',
        data: {
          name: store.getState().productAdd.name,
          description: store.getState().productAdd.description,
          price: store.getState().productAdd.price,
          unit: store.getState().productAdd.unit,
          stock: store.getState().productAdd.stock,
        },
      })
        .then((response) => {
            if (response.data.e === undefined){
                store.dispatch(openSuccessModalAdd());
            } else {
                store.dispatch(openFailModalAdd());
            }

        })
        .catch((error) => {
          console.log(error);
          store.dispatch(openFailModalAdd());
        })
        .finally(() => {
        });
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default productAddMiddleware;