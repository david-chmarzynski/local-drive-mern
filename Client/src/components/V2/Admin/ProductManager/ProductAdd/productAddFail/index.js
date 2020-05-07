import React from 'react';

import './productAddFail.scss';

import { Modal, Button } from 'react-bootstrap';

const ProductAddFail = ({ show, handleClose }) => {
    return (
        <div id="product-add-fail">
        <Modal show={show} onHide={handleClose} id="product-add-fail-modal">
            <Modal.Header closeButton>
                <Modal.Title>La création du produit a échouée</Modal.Title>
            </Modal.Header>
            <Modal.Body>Il semble qu'un des champs obligatoires soit manquant, veuillez réessayer</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Continuer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default ProductAddFail;