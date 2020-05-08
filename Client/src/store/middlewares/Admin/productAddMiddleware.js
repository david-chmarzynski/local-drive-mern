import axios from 'axios';

import { SUBMIT_ADD_PRODUCT, openSuccessModalAdd, openFailModalAdd  } from 'src/store/reducer/Admin/productAdd';
import { fetchProducts } from 'src/store/reducer/Admin/productManager';



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
          shop_id: store.getState().login.currentUser._id
        },
      })
        .then((response) => {
            if (response.data.e === undefined){
                store.dispatch(openSuccessModalAdd());
                // Après ajout de produit, appel fetchProducts qui récupère une nouvelle fois la liste des produits en BDD
                store.dispatch(fetchProducts());
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