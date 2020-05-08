import { connect } from 'react-redux';

import App from 'src/components/V2/App';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  currentUser: state.login.currentUser,
  shopProducts: state.productManager.products
});

const mapDispatchToProps = (dispatch) => ({
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;