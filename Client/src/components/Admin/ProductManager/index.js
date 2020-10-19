import React, { useEffect, useState } from 'react';

import './productManager.scss';

import AdminNavBar from '../HomeAdmin/AdminNavBar';
import { Card, Button } from 'react-bootstrap';

import ProductDelete from './ProductDelete';

const ProductManager = ({ shopProducts, handleFecthProducts, shopProductsAdded, handleStoreProductToDelete, handleDeleteProduct }) => {

    const [confirm, setConfirm] = useState(false);

    if (shopProducts === null || shopProducts !== shopProductsAdded && shopProductsAdded !== null) {
        // Récupération des produits en BDD si la liste des produits !== null, si différente de la liste après ajout ( liste d'ajout !null) ==> évite boucle infinie
        handleFecthProducts();
    }
    console.log(shopProducts);

    const handleClickDeleteProduct = (event) => {
        event.preventDefault();
        const productId = event.target.value;
        handleStoreProductToDelete(productId);
        setConfirm(true);
    };

    return (
        <div id="product-manager">
            <AdminNavBar />
            <div id="manager">
            <h1 id="title-manager">
                Mes produits
            </h1>
            {shopProducts !== null &&
                shopProducts.map((product) => (
                    <Card style={{ width: '18rem' }} key={product._id}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        <div id="access-buttons">
                            <Button variant="primary">Modifier</Button>
                            <Button variant="danger" onClick={handleClickDeleteProduct} value={product._id}>Supprimer</Button>
                        </div>
                        </Card.Body>
                    </Card>
                ))
            }
            {confirm && (
                <ProductDelete show={confirm} handleClose={setConfirm} handleDeleteProduct={handleDeleteProduct}/>
            )}
            
            </div>
        </div>
    );
};

export default ProductManager;