import { connect } from 'react-redux';

import App from 'src/components/App';


// Préparation
const mapStateToProps = () => ({
});

const mapDispatchToProps = {};

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
