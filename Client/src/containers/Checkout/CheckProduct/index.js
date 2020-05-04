
import { connect } from 'react-redux';

import {} from 'src/store/reducer';

import CheckProduct from 'src/components/Home/Checkout/CheckProduct/';

const mapStateToProps = (state) => ({
  logged: state.logged,
});

const mapDispatchToProps = () => {};

const CheckProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CheckProduct);

export default CheckProductContainer;
