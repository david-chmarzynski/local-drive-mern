import React from 'react';

import './panier.scss';

import { Modal, Card, Button } from 'react-bootstrap';

const Panier = ({ show, handleClose }) => {
    return (
        <div id="panier">
            <Modal show={show} onHide={handleClose} id="account-modal">
                <Modal.Header closeButton>
                <Modal.Title className="title-transition">
                    Mon Panier
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Header>Boeuf de Kobé - qté : 1 - Prix : 200.00€</Card.Header>
                </Card>
                </Modal.Body>
                <Modal.Footer className="success">
                <Button variant="primary">
                    Valider
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Panier;