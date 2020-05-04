import { connect } from 'react-redux';

import {} from 'src/store/reducer';

import Panier from 'src/components/Home/Panier';

const mapStateToProps = (state) => ({
  contentPanier: state.panier,
  total: state.total,
  modalPanier: state.modalPanier,
  NewPanier: state.NewPanier,
});

const mapDispatchToProps = () => {};

const PanierContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Panier);

export default PanierContainer;
