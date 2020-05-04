import { connect } from 'react-redux';

import HeaderDesk from 'src/components/V2/Layout/Header/HeaderDesk';


const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged
});

const mapDispatchToProps = (dispatch) => ({});

const HeaderDeskContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderDesk);

export default HeaderDeskContainer;