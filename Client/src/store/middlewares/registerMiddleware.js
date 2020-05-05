import axios from 'axios';

import { SUBMIT_NEW_USER, SUBMIT_NEW_SHOP } from 'src/store/reducer/register';
import { openSuccessModalRegister, openFailModalRegister } from 'src/store/reducer/register';



const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEW_USER:
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/register',
        data: {
          email: store.getState().register.email,
          password: store.getState().register.password,
          isShop: store.getState().register.isShop
        },
      })
        .then((response) => {
          store.dispatch(openSuccessModalRegister());
        })
        .catch((error) => {
          store.dispatch(openFailModalRegister());
          console.log(error);
        })
        .finally(() => {
        });
      break;
      case SUBMIT_NEW_SHOP:
      axios({
        method: 'post',
        url: 'http://localhost:3000/shops/register',
        data: {
          email: store.getState().register.email,
          password: store.getState().register.password,
          isShop: store.getState().register.isShop
        },
      })
        .then((response) => {
          store.dispatch(openSuccessModalRegister());
        })
        .catch((error) => {
          store.dispatch(openFailModalRegister());
          console.log(error);
        })
        .finally(() => {
        });

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default registerMiddleware;