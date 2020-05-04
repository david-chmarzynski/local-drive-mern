import React from 'react';

import './loginsuccess.scss';

import { Modal, Button } from 'react-bootstrap';

const LoginSuccess = ({ show, handleClose }) => {
    return (
        <div id="login-success">
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Félicitation, vous êtes désormais connecté</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                D'accord !
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default LoginSuccess;