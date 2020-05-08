import React, { useEffect } from 'react';

import './productManager.scss';

import AdminNavBar from '../HomeAdmin/AdminNavBar';
import { Card, Button } from 'react-bootstrap';

const ProductManager = ({ shopProducts, handleFecthProducts, shopProductsAdded }) => {
    console.log(shopProductsAdded);
    console.log(shopProducts);
    if (shopProducts === null || shopProducts !== shopProductsAdded && shopProductsAdded !== null) {
        handleFecthProducts();
    }
    console.log(shopProducts);
    return (
        <div id="product-manager">
            <AdminNavBar />
            <h1 id="title-manager">
                Gestion des produits
            </h1>
            <div id="manager">
            {shopProducts !== null &&
                shopProducts.map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/src/img/1.jpg" />
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        <div id="access-buttons">
                            <Button variant="primary">Modifier</Button>
                            <Button variant="danger">Supprimer</Button>
                        </div>
                        </Card.Body>
                    </Card>
                ))
            }
            
            </div>
        </div>
    );
};

export default ProductManager;