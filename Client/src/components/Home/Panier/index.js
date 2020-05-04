import React from 'react';
import PropTypes from 'prop-types';
import './panier.scss';
import './PanierProduit/panierproduit.scss';
import { Grid, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PanierProduit from 'src/containers/Panier/PanierProduit';

const Panier = ({ contentPanier, total, NewPanier, modalPanier }) => {
  return (
    <div>
      <div>
        <p>Votre Panier</p>
        <Grid columns={4} stackable doubling>
          <Grid.Row id="headerpanier">
            {total.map((totalPanier) => (
              <>
                <Grid.Column width={4}>
                  <strong>{totalPanier.Quantite}Articles</strong>
                </Grid.Column>
                <Grid.Column width={3}>
                  <strong>{totalPanier.Total} €</strong>
                </Grid.Column>
              </>
            ))}
            <Grid.Column width={9}>
              <NavLink to="/Checkout">
                <Button
                  compact
                  fluid
                  content="Verifier & Valider la commande"
                  id="checkout-btn"
                />
              </NavLink>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {modalPanier === false && (
          contentPanier.map((product) => (
            <PanierProduit key={product.id} id={product.id} produit={product} name={product.name} price={product.price} image={product.image} />
          ))
        )}
        {modalPanier === true && (
          NewPanier.map((product) => (
            <PanierProduit key={product.id} id={product.id} produit={product} name={product.name} price={product.price} image={product.image} sale={product.sale} quantite={product.quantite} />
          ))
        )}
      </div>
    </div>
  );
};

Panier.propTypes = {
  shopName: PropTypes.string.isRequired,
  total: PropTypes.object.isRequired,
  contentPanier: PropTypes.object.isRequired,
  NewPanier: PropTypes.object.isRequired,
  modalPanier: PropTypes.bool.isRequired,
};

export default Panier;
