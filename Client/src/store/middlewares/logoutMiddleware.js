import axios from 'axios';

import { STORE_LOGOUT } from 'src/store/reducer/account';
import { isLogged, emptyUser } from 'src/store/reducer/login';
import { emptyUserRegister } from 'src/store/reducer/register';



const logoutMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case STORE_LOGOUT:
      axios({
        method: 'get',
        url: 'http://localhost:3000/users/logout',
        data: {
          email: store.getState().register.email,
          password: store.getState().register.password,
        },
      })
        .then((response) => {
          store.dispatch(isLogged(response.data.isAuthenticated));
          if (response.data.isAuthenticated === false) {
              store.dispatch(emptyUser());
              store.dispatch(emptyUserRegister());
          }
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

export default logoutMiddleware;