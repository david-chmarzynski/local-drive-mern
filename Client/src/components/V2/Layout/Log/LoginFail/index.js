import React from 'react';

import './loginfail.scss';

import { Modal, Button } from 'react-bootstrap';

const LoginFail = ({ show, handleClose }) => {
    return (
        <div id="login-fail">
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>Une erreur s'est produite !</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                D'accord !
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default LoginFail;