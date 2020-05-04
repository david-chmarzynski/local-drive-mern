import { connect } from 'react-redux';

import Main from 'src/components/Home/Main';

import { changeFieldValue } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  emailValue: state.email,
  isShop: state.isShop,
  logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
