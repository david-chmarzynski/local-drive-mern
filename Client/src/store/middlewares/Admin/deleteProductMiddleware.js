import axios from 'axios';

import { storeProducts, DELETE_PRODUCT } from 'src/store/reducer/Admin/productManager';
import { FETCH_PRODUCTS_ADDED, storeProductsAdded } from 'src/store/reducer/Admin/productAdd';



const deleteProductMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
        case DELETE_PRODUCT:
          axios({
            method: 'delete',
            url: `http://localhost:3000/admin/delete`,
            data: {
                productId: store.getState().productManager.productToDelete,
                shop_id: store.getState().login.currentUser._id
            },
          })
            .then((response) => {
                console.log(response);
                store.dispatch(storeProducts(response.data.result));
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
            });
          break;    
        default:
          // je laisse passer les autres actions
          next(action);
      }
    };

export default deleteProductMiddleware;