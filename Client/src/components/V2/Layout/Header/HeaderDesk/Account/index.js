import React from 'react';
import { Modal, Button, Card, ListGroup } from 'react-bootstrap';

import './account.scss';

const Account = ({
    show,
    handleClose,
    currentUser
}) => {
    return (
        <div id="account">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="title-transition">
                    {currentUser !== null && (
                        <p>Bienvenue {currentUser.email}</p>
                    )}
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card>
                    <Card.Header>Mon Compte</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Mes informations personnelles</ListGroup.Item>
                        <ListGroup.Item>Mes commandes</ListGroup.Item>
                        <ListGroup.Item>Options</ListGroup.Item>
                    </ListGroup>
                </Card>
                </Modal.Body>
                <Modal.Footer className="account">
                <Button variant="danger" onClick={handleClose} >
                    Se déconnecter
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Account;