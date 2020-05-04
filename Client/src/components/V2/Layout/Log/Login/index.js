import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './login.scss';
import Register from 'src/containers/Register';

const Login = ({
  show,
  handleClose,
  handleChangeEmail,
  handleChangePassword,
  handleSubmitLogin,
  isLogged
}) => {
  const [register, setRegister] = useState(false);
  const handleCloseRegister = () => setRegister(false);
  const handleRegister = () => setRegister(true);

  const handleCompChangeEmail = (event) => {
    const email = event.target.value;
    handleChangeEmail(email);
  };

  const handleCompChangePassword = (event) => {
    const password = event.target.value;
    handleChangePassword(password);
  };

  const handleCompSubmitLogin = () => {
    handleSubmitLogin();
  }

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
              <Form.Control type="email" placeholder="Email" onChange={handleCompChangeEmail}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="title-transition">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" onChange={handleCompChangePassword} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="title-transition">
              <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group>
            <Form.Text className="text-muted title-transition">
              <a href="#">Mot de passe oublié ?</a>
            </Form.Text>
            {isLogged && (
            <Form.Text>
              Vous êtes à présent connecté
            </Form.Text>
            )}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleRegister}>
            Créer une compte
          </Button>
          <Button variant="primary" onClick={handleClose} onClick={handleCompSubmitLogin} >
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
