import React from 'react';

import './registersuccess.scss';

import { Modal, Button } from 'react-bootstrap';

const RegisterSuccess = ({ show, handleClose }) => {
    return (
        <div id="register-success">
        <Modal show={show} onHide={handleClose} id="register-success-modal">
            <Modal.Header closeButton>
                <Modal.Title>Compte créé</Modal.Title>
            </Modal.Header>
            <Modal.Body>Félicitation, vous faites désormais partie de Local Drive</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Continuer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default RegisterSuccess;