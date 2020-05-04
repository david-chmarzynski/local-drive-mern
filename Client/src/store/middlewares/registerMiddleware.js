import axios from 'axios';

import { SUBMIT_NEW_USER } from 'src/store/reducer/register';



const registerMiddleware = (store) => (next) => (action) => {
  console.log(store.getState().register.email);
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
          console.log("Passage réussi dans le Middleware")
          console.log(response);
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

export default registerMiddleware;