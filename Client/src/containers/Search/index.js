import { connect } from 'react-redux';

import Search from 'src/components/Home/Search';


import { changeFieldValue, fetchData, startLoading } from 'src/store/reducer';


const mapStateToProps = (state) => ({
  villeValue: state.ville,
  shops: state.shops,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onFieldChange: (name, value) => {
    dispatch(changeFieldValue(name, value));
  },
  onSubmitVille: () => {
    const action = fetchData();
    dispatch(action);
    dispatch(startLoading());
  },
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

export default SearchContainer;
