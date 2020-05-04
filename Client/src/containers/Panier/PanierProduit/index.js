import { connect } from 'react-redux';

import { delectProductPanier, QuantiteValeur, totalPanier } from 'src/store/reducer';

import PanierProduit from 'src/components/Home/Panier/PanierProduit';

const mapStateToProps = (state) => ({
  panierStore: state.panier,
  panier: state.panier,
  NewPanier: state.NewPanier,
});


const mapDispatchToProps = (dispatch) => ({
  handleDelectProduct: (newPanierStore) => {
    dispatch(delectProductPanier(newPanierStore));
  },

  upgradeNewPanier: (newPanierStoreMaj) => {
    dispatch(QuantiteValeur(newPanierStoreMaj));
  },

  calculePanierTotal: (TotalPanier) => {
    dispatch(totalPanier(TotalPanier));
  },
});

const PanierProduitContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PanierProduit);

export default PanierProduitContainer;
