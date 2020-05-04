import { connect } from 'react-redux';

import { panier } from 'src/store/reducer';

import Produits from 'src/components/Home/Produits';

const mapStateToProps = (state) => ({
  userShopChoix: state.userShopChoix,
  panierStore: state.panier,
});

const mapDispatchToProps = (dispatch) => ({
  onPanier: (NewProduit) => {
    dispatch(panier(NewProduit));
  },
});

const ProduitsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Produits);

export default ProduitsContainer;
