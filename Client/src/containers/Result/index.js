import { connect } from 'react-redux';
import Result from 'src/components/Home/Result';

const mapStateToProps = (state) => ({
  shops: state.shops,
});

const mapDispatchToProps = () => {};

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);

export default ResultContainer;
