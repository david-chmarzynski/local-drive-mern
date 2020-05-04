import { createStore, compose, applyMiddleware } from 'redux';

import ajaxMiddleware from 'src/store/middlewares/ajaxMiddleware';
import logMiddleware from 'src/store/middlewares/logMiddleware';
import loginMiddleware from 'src/store/middlewares/loginMiddleware';
import subscribeMiddleware from 'src/store/middlewares/subscribeMiddleware';
import categoriesMiddleware from './middlewares/categoriesMiddleware';
import adminMiddleware from './middlewares/adminMiddleware';
import monCompteMiddleware from './middlewares/monCompteMiddleware';
import productsMiddleware from './middlewares/productsMiddleware';
import promotionsMiddleware from './middlewares/promotionsMiddleware';
import shopChoixMiddleware from './middlewares/shopChoixMiddleware';
import modifyProductMiddleware from './middlewares/modifyProductMiddleware';
import deletePromotionMiddleware from './middlewares/deletePromotionMiddleware';
import addPromotionMiddleware from './middlewares/addPromotionMiddleware';

import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    ajaxMiddleware,
    logMiddleware,
    loginMiddleware,
    subscribeMiddleware,
    categoriesMiddleware,
    adminMiddleware,
    monCompteMiddleware,
    productsMiddleware,
    promotionsMiddleware,
    deletePromotionMiddleware,
    shopChoixMiddleware,
    modifyProductMiddleware,
    addPromotionMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);


export default store;
