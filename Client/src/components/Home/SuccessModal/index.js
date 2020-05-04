import React from 'react';
import { Modal, Button, Header, Icon } from 'semantic-ui-react';
import './success-modal.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SuccessModal = ({ handleCloseSuccessModalStore, successModalBool }) => {
  const handleCloseSuccess = () => {
    handleCloseSuccessModalStore();
  };
  return (
    <div id="success-modal">
      <Modal
        // trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={successModalBool}
        onClose={handleCloseSuccess}
        basic
        size="small"
      >
        <Header icon="delete" content="Suppression" />
        <Modal.Content>
          <h3>La Promotion a bien été supprimée !</h3>
        </Modal.Content>
        <Modal.Actions>
          <NavLink to="/Admin">
            <Button color="green" inverted onClick={handleCloseSuccess}>
              <Icon name="checkmark" /> Compris !
            </Button>
          </NavLink>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

SuccessModal.propTypes = {
  handleCloseSuccessModalStore: PropTypes.func.isRequired,
  successModalBool: PropTypes.bool.isRequired,
};

export default SuccessModal;
