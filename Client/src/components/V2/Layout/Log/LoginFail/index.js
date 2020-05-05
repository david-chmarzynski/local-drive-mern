import React from 'react';

import './loginfail.scss';

import { Modal, Button } from 'react-bootstrap';

const LoginFail = ({ show, handleClose }) => {
    return (
        <div id="login-fail">
        <Modal show={show} onHide={handleClose} id="login-fail-modal" >
            <Modal.Header closeButton>
                <Modal.Title>Une erreur s'est produite</Modal.Title>
            </Modal.Header>
            <Modal.Body><li>Email et/ou Mot de passe erroné</li></Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Fermer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default LoginFail;