import React, { useState } from 'react';
import { Icon, Input } from 'semantic-ui-react';
import { Modal, Form, Button, OverlayTrigger, Tooltip, InputGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './register.scss';

const Register = ({
  show,
  handleClose,
  handleCloseRegister,
  handleChangeEmail,
  handleChangePassword,
  handleChangeCPassword,
  handleChangeIsShop,
  handleSubmitNewUser,
  handleSubmitNewShop,
  storedPassword,
  storedCPassword,
  storedIsShop
}) => {
  // En cas de mots de passe différents
  const [error, setError] = useState(false);

  function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Cochez seulement si vous êtes commerçant. L'identifiant transmit par votre mairie vous sera demandé.
      </Tooltip>
    );
  }

  const handleCompChangeEmail = (event) => {
    const email = event.target.value;
    handleChangeEmail(email);
  };

  const handleCompChangePassword = (event) => {
    const password = event.target.value;
    handleChangePassword(password);
  };

  const handleCompChangeCPassword = (event) => {
    const cpassword = event.target.value;
    handleChangeCPassword(cpassword);
  };

  const handleCompChangeIsShop = () => {
    handleChangeIsShop();
  };

  const handleCompSubmitNewUser = (event, error) => {
    event.preventDefault();
    if (storedPassword === storedCPassword) {
      handleClose();
      if (storedIsShop) {
        handleSubmitNewShop();
      } else {
        handleSubmitNewUser();
      }
    } else {
      setError(true);
    }
  };


  return (
    <div id="register">
      <Modal show={show} onHide={handleClose} animation={false} id="register-modal">
        <Modal.Header closeButton>
          <Modal.Title className="title-transition">
            Inscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail" className="title-transition">
              <Form.Label>Adresse Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={handleCompChangeEmail} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Mot de passe"
                  name="password"
                  onChange={handleCompChangePassword}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend" className="w-3">
                    {storedPassword !== null && storedPassword.length > 0 && (
                      <p><Icon name="checkmark" color="green"/></p>
                    )}
                    {storedPassword !== null && storedPassword.length <= 0 && (
                      <p><Icon name="delete" color="red" /></p>
                    )}
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicCPassword">
              <Form.Label>Confirmation mot de passe</Form.Label>
              <InputGroup>
                <Form.Control
                  type="password"
                  placeholder="Répéter le mot de passe"
                  name="cpassword"
                  onChange={handleCompChangeCPassword}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">
                    {storedPassword === storedCPassword && (<p><Icon name="checkmark" color="green" /></p>)}
                    {storedPassword !== storedCPassword && (<p><Icon name="delete" color="red" /></p>)}
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="title-transition">
              <OverlayTrigger
                placement="left"
                delay={{ show: 100, hide: 400 }}
                overlay={renderTooltip}
              >
                <Form.Check type="checkbox" label="Vous êtes commerçant ?" onChange={handleCompChangeIsShop} />
              </OverlayTrigger>
            </Form.Group>

            {error !== false && (
              <p className="wrong">
                <li>
                  Les mots de passe sont différents
                </li>
              </p>
            )}
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseRegister}>
            <Icon name="arrow circle left" />
          </Button>
          <Button variant="primary" type="submit" onClick={handleCompSubmitNewUser}>
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
