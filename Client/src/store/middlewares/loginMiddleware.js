import axios from 'axios';

import { SUBMIT_LOGIN, isLogged, fetchUserData } from 'src/store/reducer/login';



const loginMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().login.email);
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios({
        method: 'post',
        url: 'http://localhost:3000/users/signin',
        data: {
          email: store.getState().register.email,
          password: store.getState().register.password,
        },
      })
        .then((response) => {
          console.log("Passage réussi dans le Middleware")
          console.log(response);
          store.dispatch(isLogged(response.data.isAuthenticated));
          store.dispatch(fetchUserData(response.data.currentUser.local));
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

export default loginMiddleware;