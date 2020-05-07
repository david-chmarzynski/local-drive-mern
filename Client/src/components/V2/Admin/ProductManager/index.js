import React from 'react';

import './productManager.scss';

import AdminNavBar from '../HomeAdmin/AdminNavBar';
import { Card, Button } from 'react-bootstrap';

const ProductManager = () => {
    return (
        <div id="product-manager">
            <AdminNavBar />
            <h1 id="title-manager">
                Gestion des produits
            </h1>
            <div id="manager">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/src/img/1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div id="access-buttons">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/src/img/1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div id="access-buttons">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/src/img/1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div id="access-buttons">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/src/img/1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div id="access-buttons">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/src/img/1.jpg" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <div id="access-buttons">
                        <Button variant="primary">Modifier</Button>
                        <Button variant="danger">Supprimer</Button>
                    </div>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default ProductManager;