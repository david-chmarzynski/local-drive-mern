import React from 'react';

import './logoutfail.scss';

import { Modal, Button } from 'react-bootstrap';

const LogoutFail = ({ show, handleClose }) => {
    return (
        <div id="logout-fail">
        <Modal show={show} onHide={handleClose} id="logout-fail-modal">
            <Modal.Header closeButton>
                <Modal.Title>La déconnexion a échouée</Modal.Title>
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

export default LogoutFail;