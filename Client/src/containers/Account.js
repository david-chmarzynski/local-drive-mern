import { connect } from 'react-redux';

import Account from 'src/components/V2/Layout/Header/HeaderDesk/Account';
import { storeLogout } from 'src/store/reducer/account';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  currentUser: state.login.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    handleLogout: () => {
        dispatch(storeLogout());
      },
});

const AccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);

export default AccountContainer;