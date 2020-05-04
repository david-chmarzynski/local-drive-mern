
import { connect } from 'react-redux';

import { delectProductPanier, changeCommercant, changeOpenModal, changeCloseModal } from 'src/store/reducer';

import Checkout from 'src/components/Home/Checkout/';

const mapStateToProps = (state) => ({
  panier: state.panier,
  total: state.total,
  panierStore: state.panier,
  logged: state.logged,
  shops: state.shops,
  user: state.user,
  userShopChoixName: state.userShopChoixName,
});

const mapDispatchToProps = (dispatch) => ({
  handleDelectProduct: (newPanierStore) => {
    dispatch(delectProductPanier(newPanierStore));
  },
  // Change the openModal state to true, the modal openning is making through it
  handleChangeOpenModal: () => {
    dispatch(changeOpenModal());
  },
  // Change the openModal state to false, the modal closing is making through it
  handleChangeCloseModal: () => {
    dispatch(changeCloseModal());
  },
  // Change the commercant state, true if false / false if true
  onHandleClickCommercant: () => {
    dispatch(changeCommercant());
  },
});

const CheckoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Checkout);

export default CheckoutContainer;
