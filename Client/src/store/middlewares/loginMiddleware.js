import axios from 'axios';

import {
  SUBMIT_LOGIN, // APPEL AXIOS POUR LA CONNEXION
  isLogged, // RESULTAT DE IS_AUTHENTICATED()
  fetchUserData, // RECUPERATION DES INFOS USER
  openSuccessModal, // EN CAS DE SUCCES, PERMET D'AFFICHER LA MODALE
  openFailModal // EN CAS D'ECHEC, PERMET D'AFFICHER LA MODALE
} from 'src/store/reducer/login';



const loginMiddleware = (store) => (next) => (action) => {
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
          store.dispatch(isLogged(response.data.isAuthenticated));
          store.dispatch(fetchUserData(response.data.currentUser.local));
          store.dispatch(openSuccessModal());
        })
        .catch((error) => {
          store.dispatch(openFailModal());
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