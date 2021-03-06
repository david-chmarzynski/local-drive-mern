import React from 'react';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './account.scss';

const Account = ({
    show,
    handleClose,
    currentUser,
    handleLogout
}) => {
    const handleCompLogout = (event) => {
        event.preventDefault();
        handleClose();
        handleLogout();
    }
    return (
        <div id="account">
            <Modal show={show} onHide={handleClose} id="account-modal">
                <Modal.Header closeButton>
                <Modal.Title className="title-transition">
                    {currentUser !== null && (
                        <p>Bienvenue {currentUser.local.email}</p>
                    )}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Header>Mon Compte</Card.Header>
                    <ListGroup variant="flush">
                        {!currentUser.local.isShop && (
                        <>
                        <ListGroup.Item>Mes informations personnelles</ListGroup.Item>
                        <ListGroup.Item>Mes commandes</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                        </>
                        )}
                        {currentUser.local.isShop && (
                        <>
                        <Link to="/admin/boutique" onClick={handleClose}><ListGroup.Item>Mon Magasin</ListGroup.Item></Link>
                        <Link to="/admin/produits" onClick={handleClose}><ListGroup.Item>Mes produits</ListGroup.Item></Link>
                        <ListGroup.Item>Mes promotions</ListGroup.Item>
                        </>
                        )}
                    </ListGroup>
                </Card>
                </Modal.Body>
                <Modal.Footer className="account">
                <Button variant="danger" onClick={handleCompLogout}>
                    Se déconnecter
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Account;