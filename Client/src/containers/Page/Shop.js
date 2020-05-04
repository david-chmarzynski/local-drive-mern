import { connect } from 'react-redux';

import { getShopBySlug } from 'src/utils/selectors';
import { shopChoixResult, shopChoixUser } from 'src/store/reducer';

import Shop from 'src/components/Home/Page/Shop';

const mapStateToProps = (state, ownProps) => {
  const shop = getShopBySlug(ownProps.match.params.slug, state.shops, state.userShopChoix);
  return ({
    shopData: shop,
  });
};

const mapDispatchToProps = (dispatch) => ({
  shopChoix: (shopChoixId, shopChoixName) => {
    dispatch(shopChoixUser(shopChoixId, shopChoixName));
  },

  shopUserChoixResult: () => {
    dispatch(shopChoixResult());
  },

});

const ShopContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Shop);

export default ShopContainer;
