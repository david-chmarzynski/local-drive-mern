import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './login.scss';
import Register from 'src/components/V2/Layout/Log/Register';

const Login = ({
  show,
  handleClose,
}) => {
  const [register, setRegister] = useState(false);
  const handleCloseRegister = () => setRegister(false);
  const handleRegister = () => setRegister(true);

  return (
    <>
      {!register && (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title-transition">
            Connexion
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

            <Form.Group controlId="formBasicCheckbox" className="title-transition">
              <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group>
            <Form.Text className="text-muted title-transition">
              <a href="#">Mot de passe oublié ?</a>
            </Form.Text>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegister}>
            Créer une compte
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Se connecter
          </Button>
        </Modal.Footer>
      </Modal>
      )}
      {register && (
        <Register show={show} handleClose={handleClose} handleCloseRegister={handleCloseRegister} />
      )}
    </>
  );
};

Login.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Login;
