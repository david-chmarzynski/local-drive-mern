import axios from 'axios';

import { SUBMIT_ADD_PRODUCT  } from 'src/store/reducer/Admin/productAdd';



const uploadImageAddMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_ADD_PRODUCT:
      
      break;

    default:
      // je laisse passer les autres actions
      next(action);
  }
};

export default uploadImageAddMiddleware;