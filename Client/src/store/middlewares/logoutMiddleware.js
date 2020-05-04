import axios from 'axios';

import { STORE_LOGOUT } from 'src/store/reducer/account';
import { isLogged, emptyUser } from 'src/store/reducer/login';



const logoutMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().login.email);
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
          console.log("Passage réussi dans le Middleware")
          console.log(response);
          store.dispatch(isLogged(response.data.isAuthenticated));
          if (response.data.isAuthenticated === false) {
              store.dispatch(emptyUser());
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