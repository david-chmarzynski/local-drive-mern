import React from 'react';

import './logoutsuccess.scss';

import { Modal, Button } from 'react-bootstrap';

const LogoutSuccess = ({ show, handleClose }) => {
    return (
        <div id="logout-success">
        <Modal show={show} onHide={handleClose} id="logout-success-modal">
            <Modal.Header closeButton>
                <Modal.Title>Déconnecté</Modal.Title>
            </Modal.Header>
            <Modal.Body>Vous êtes déconnecté, à bientôt !</Modal.Body>
            <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
                Continuer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default LogoutSuccess;