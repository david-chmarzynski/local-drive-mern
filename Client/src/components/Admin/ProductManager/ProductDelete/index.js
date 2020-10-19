import React from 'react';

import './productDelete.scss';

import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDelete = ({ show, handleClose, handleDeleteProduct }) => {

    const handleDeleteProductComp = () => {
        handleClose(false);
        handleDeleteProduct();

    }
    return (
        <div id="product-add-success">
        <Modal show={show} onHide={handleClose} id="product-add-success-modal">
            <Modal.Header closeButton>
                <Modal.Title>Êtes-vous sûr de vouloir supprimer ce produit ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Test</Modal.Body>
            <Modal.Footer>
            <Link to="/admin/produits">
            <Button variant="danger" onClick={handleClose}>
                Annuler
            </Button>
            </Link>
            <Button variant="success" onClick={handleDeleteProductComp}>
                Confimer
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
};

export default ProductDelete;