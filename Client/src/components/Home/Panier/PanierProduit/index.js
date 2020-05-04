import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './panierproduit.scss';
import '../panier.scss';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';


const PanierProduit = ({
  quantite,
  price,
  name,
  image,
  id,
  handleDelectProduct,
  NewPanier,
  upgradeNewPanier,
  panier,
  calculePanierTotal,
  sale,
}) => {

  const [count, setCount] = (useState(quantite));
  const Value = count * (price - (sale / 100));
  const total = [];
  total.push(Value);

  const UpgradePanier = () => {
    const ValueCount = { prix: Value, quantite: count };

    const product = panier.find( key => key.id === id);
    const returnPanier = Object.assign(product, ValueCount);

    if (NewPanier.find((produit => produit.id === product.id))) {
    } else {
    upgradeNewPanier(returnPanier);
    }
  };
  const PrixPanier = () => {
    const pricePanier = panier.map((productPrice) => {
      return parseFloat(productPrice.prix);
    });

    const totalPrice = pricePanier.reduce((a, b) => a + b, 0).toFixed(2);

    const totalquantite = panier.map((productQuantiteTotal) => {
      return parseFloat(productQuantiteTotal.quantite);
    });
    const totalQuantite = totalquantite.reduce((a, b) => a + b, 0);
    const TotalPriceQuantite = { Total: totalPrice, Quantite: totalQuantite };
    const TotalPanier = [];
    TotalPanier.push(TotalPriceQuantite);

    calculePanierTotal(TotalPanier);
  };

  const onHandleDelectProduct = (id) => {
    const newPanierStoreMaj = panier.filter((product) => product.id !== id);
    handleDelectProduct(newPanierStoreMaj);
  };

  UpgradePanier();
  PrixPanier();
  return (
    <>
      <div id="produit">
        <Grid.Row centered columns={7}>
          <Grid>
            <Grid.Row verticalAlign="middle" textAlign="center">
              <Grid.Column width={3}>
                <Image src={image} size="tiny" wrapped />
              </Grid.Column>
              <Grid.Column width={1}>
                <div>{count}</div>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button icon attached="left" onClick={() => setCount(count + 1)}>
                  <Icon name="plus" />
                </Button>
              </Grid.Column>
              <Grid.Column width={3}>
                <div>{name}</div>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button icon attached="right" onClick={() =>{if (count >= 2) setCount(count - 1); }}>
                  <Icon name="minus" />
                </Button>
              </Grid.Column>
              <Grid.Column width={3}>
                <strong>{Value.toFixed(2)} €</strong>
              </Grid.Column>
              <Grid.Column width={2}>
                <Button icon onClick={() => onHandleDelectProduct(id)}>
                  <Icon name="trash alternate outline" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </div>
    </>
  );
};


PanierProduit.propTypes = {
  panier: PropTypes.object.isRequired,
  upgradeNewPanier: PropTypes.func.isRequired,
  calculePanierTotal: PropTypes.func.isRequired,
  NewPanier: PropTypes.object.isRequired,
  handleDelectProduct: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  quantite: PropTypes.number.isRequired,
  sale: PropTypes.number.isRequired,
};

export default PanierProduit;
