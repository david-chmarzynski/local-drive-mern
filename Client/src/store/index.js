import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';

// == Import : MiddleWares
import registerMiddleware from 'src/store/middlewares/registerMiddleware';
import loginMiddleware from 'src/store/middlewares/loginMiddleware';

import reducer from 'src/store/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    loginMiddleware,
    registerMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
