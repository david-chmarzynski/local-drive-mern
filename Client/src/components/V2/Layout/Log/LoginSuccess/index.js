import React from 'react';

import './loginsuccess.scss';

import { Modal, Button } from 'react-bootstrap';

const LoginSuccess = ({ show, handleClose }) => {
    return (
        <div id="login-success">
        <Modal show={show} onHide={handleClose} id="login-success-modal">
            <Modal.Header closeButton>
                <Modal.Title>Connecté</Modal.Title>
            </Modal.Header>
            <Modal.Body>Félicitation, vous êtes désormais connecté</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Continuer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default LoginSuccess;