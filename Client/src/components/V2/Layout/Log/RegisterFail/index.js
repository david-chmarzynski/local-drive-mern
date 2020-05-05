import React from 'react';

import './registerfail.scss';

import { Modal, Button } from 'react-bootstrap';

const RegisterFail = ({ show, handleClose }) => {
    return (
        <div id="register-fail">
        <Modal show={show} onHide={handleClose} id="register-fail-modal">
            <Modal.Header closeButton>
                <Modal.Title>La création du compte a échouée</Modal.Title>
            </Modal.Header>
            <Modal.Body>Il semble qu'une erreur se soit produite, veuillez réessayer plus tard</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Continuer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default RegisterFail;