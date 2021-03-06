import React, { useState } from 'react';

import './productadd.scss';

import { Form, Button } from 'react-bootstrap';
import ProductAddSuccess from './productAddSuccess';
import ProductAddFail from './productAddFail';
import AdminNavBar from '../../HomeAdmin/AdminNavBar';
const axios = require('axios');

const ProductAdd = ({
    handleChangeName,
    handleChangeDescription,
    handleChangePrice,
    handleChangeUnit,
    handleChangeStock,
    handleSubmitAddProduct,
    openSuccessAdd,
    openFailAdd,
    handleCloseSuccessModalAdd,
    handleCloseFailModalAdd,
    handleChangeUploadImageComp,
    handleStoreImagePath
}) => {

    const [valide, setValide] = useState(false);

    const handleCompChangeName = (event) => {
        const name = event.target.value;
        handleChangeName(name);
    };

    const handleCompChangeDescription = (event) => {
        const description = event.target.value;
        handleChangeDescription(description);
    };

    const handleCompChangePrice = (event) => {
        const NaNprice = event.target.value;
        const price = parseInt(NaNprice);
        handleChangePrice(price);
    };

    const handleCompChangeUnit = (event) => {
        const unit = event.target.value;
        console.log(valide)
        if (unit !== '-') {
            setValide(true);
            handleChangeUnit(unit);
        } else {
            setValide(false);
        }
    };

    const handleCompChangeStock = (event) => {
        const NaNstock = event.target.value;
        const stock = parseInt(NaNstock);
        handleChangeStock(stock);
    };

    const handleCompSubmitProduct = (event) => {
        event.preventDefault();
        handleSubmitAddProduct();
    };

    let image = null;

    

    const submitFile = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('product-img', image);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post('http://localhost:3000/admin/upload/image', data, config).then((response) => {
            console.log(response);
            handleStoreImagePath(response.data.path);
        }).catch((e) => {
            console.log(e);
        })
    }

    const handleChangeUploadImage = (event) => {
        image = event.target.files[0];
        console.log(image);
        
        // handleChangeUploadImageComp(image);
    };
    


    return (
        <div id="product">
        <AdminNavBar />
        <div id="product-add">
            <form onSubmit={submitFile}>
                    <input type="file" name="product-img" onChange={handleChangeUploadImage}/>
                <Button type="submit">Upload</Button>
            </form>
            <Form onSubmit={handleCompSubmitProduct}>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Nom du produit :</Form.Label>
                    <Form.Control type="text" placeholder="Nom du produit" onChange={handleCompChangeName} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description du produit :</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={handleCompChangeDescription} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Prix :</Form.Label>
                    <Form.Control type="text" placeholder="Prix ( en euros €)" onChange={handleCompChangePrice} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Unité de vente :</Form.Label>
                    <Form.Control as="select" onChange={handleCompChangeUnit} isValid={valide}>
                    <option>-</option>
                    <option>/KG</option>
                    <option>/L</option>
                    <option>/Unité</option>
                    <option>/Lot de 2</option>
                    <option>/Lot de 4</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Stock :</Form.Label>
                    <Form.Control type="text" placeholder="Entrez un chiffre ( correspond à l'unité de vente )" onChange={handleCompChangeStock} />
                </Form.Group>
                <Button type="submit" variant="light">Envoyer</Button>
            </Form>
            <>
            <ProductAddSuccess show={openSuccessAdd} handleClose={handleCloseSuccessModalAdd} />
            </>
            <>
            <ProductAddFail show={openFailAdd} handleClose={handleCloseFailModalAdd} />
            </>
        </div>
        </div>
    );
};

export default ProductAdd;