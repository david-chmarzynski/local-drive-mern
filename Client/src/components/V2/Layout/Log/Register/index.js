import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Modal, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './register.scss';

const Register = ({ show, handleClose, handleCloseRegister }) => {

  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Cochez seulement si vous êtes commerçant. L'identifiant transmit par votre mairie vous sera demandé.
      </Tooltip>
    );
  }
  return (
    <div id="register">
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="title-transition">
            Inscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail" className="title-transition">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="title-transition">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="title-transition">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Répéter le mot de passe" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="title-transition">
              <OverlayTrigger
                placement="left"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <Form.Check type="checkbox" label="Vous êtes commerçant ?" />
              </OverlayTrigger>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            <Icon name="arrow circle left" color="white" />
          </Button>
          <Button variant="primary" onClick={handleClose}>
              S'inscrire
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Register.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCloseRegister: PropTypes.func.isRequired,
};

export default Register;
