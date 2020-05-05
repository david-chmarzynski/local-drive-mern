import {
  combineReducers,
} from 'redux';

// == Reducer Import
import app from './app';
import register from './register';
import login from './login';
import account from './account';

const reducer = combineReducers({
  account,
  login,
  register,
  app,
});

export default reducer;
