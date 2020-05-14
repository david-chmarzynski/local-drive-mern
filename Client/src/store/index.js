import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// == Import : MiddleWares
import registerMiddleware from 'src/store/middlewares/registerMiddleware';
import loginMiddleware from 'src/store/middlewares/loginMiddleware';
import logoutMiddleware from 'src/store/middlewares/logoutMiddleware';
import searchMiddleware from 'src/store/middlewares/searchMiddleware';
import productAddMiddleware from 'src/store/middlewares/Admin/productAddMiddleware';
import getProductsMiddleware from 'src/store/middlewares/Admin/getProductsMiddleware';
import uploadImageMiddleware from 'src/store/middlewares/Admin/uploadImageMiddleware';
import deleteProductMiddleware from 'src/store/middlewares/Admin/deleteProductMiddleware';

import reducer from 'src/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    deleteProductMiddleware,
    searchMiddleware,
    logoutMiddleware,
    loginMiddleware,
    registerMiddleware,
    productAddMiddleware,
    uploadImageMiddleware,
    getProductsMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
