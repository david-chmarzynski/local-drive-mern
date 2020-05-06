import { connect } from 'react-redux';

import SearchBar from 'src/components/V2/SearchBar';

import { storeChangeSearch, storeSubmitSearch, storeGetEmptyResult } from 'src/store/reducer/searchbar';

const mapStateToProps = (state) => ({
    search: state.searchbar.search,
    result: state.searchbar.result,
});

const mapDispatchToProps = (dispatch) => ({

  handleSubmitSearch: () => {
    dispatch(storeSubmitSearch());
  },

  handleChangeSearch: (search) => {
    dispatch(storeChangeSearch(search));
  },

  handleGetEmptyResult: () => {
    dispatch(storeGetEmptyResult())
  },
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;