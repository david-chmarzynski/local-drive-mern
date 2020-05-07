import React from 'react';

import './productAddSuccess.scss';

import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductAddSuccess = ({ show, handleClose }) => {
    return (
        <div id="product-add-success">
        <Modal show={show} onHide={handleClose} id="product-add-success-modal">
            <Modal.Header closeButton>
                <Modal.Title>Produit ajouté</Modal.Title>
            </Modal.Header>
            <Modal.Body>Félicitation, le produit a bien été ajouté</Modal.Body>
            <Modal.Footer>
            <Link to="/admin">
            <Button variant="success" onClick={handleClose}>
                Continuer
            </Button>
            </Link>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default ProductAddSuccess;