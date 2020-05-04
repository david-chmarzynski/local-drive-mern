import {
  combineReducers,
} from 'redux';

// == Reducer Import
import app from './app';
import register from './register';
import login from './login';

const reducer = combineReducers({
  login,
  register,
  app,
});

export default reducer;
