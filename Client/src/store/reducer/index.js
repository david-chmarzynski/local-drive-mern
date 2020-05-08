import {
  combineReducers,
} from 'redux';

// == Reducer Import
import app from './app';
import register from './register';
import login from './login';
import account from './account';
import searchbar from './searchbar';
import productAdd from './Admin/productAdd';
import productManager from './Admin/productManager';

const reducer = combineReducers({
  productManager,
  productAdd,
  searchbar,
  account,
  login,
  register,
  app,
});

export default reducer;
