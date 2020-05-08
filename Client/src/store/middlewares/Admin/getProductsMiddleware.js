import axios from 'axios';

import { storeProducts, FETCH_PRODUCTS } from 'src/store/reducer/Admin/productManager';
import { FETCH_PRODUCTS_ADDED, storeProductsAdded } from 'src/store/reducer/Admin/productAdd';



const getProductsMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
        case FETCH_PRODUCTS:
          axios({
            method: 'post',
            url: 'http://localhost:3000/admin/shop/products',
            data: {
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
        case FETCH_PRODUCTS_ADDED:
            axios({
                method: 'post',
                url: 'http://localhost:3000/admin/shop/products',
                data: {
                    shop_id: store.getState().login.currentUser._id
                },
              })
                .then((response) => {
                    console.log(response);
                    store.dispatch(storeProductsAdded(response.data.result));
                })
                .catch((error) => {
                  console.log(error);
                })
                .finally(() => {
                });
    
        default:
          // je laisse passer les autres actions
          next(action);
      }
    };

export default getProductsMiddleware;