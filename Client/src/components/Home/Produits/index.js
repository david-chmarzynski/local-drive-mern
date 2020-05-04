import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Segment, Icon } from 'semantic-ui-react';
import './produits.scss';

const Produits = ({ userShopChoix, onPanier, panierStore }) => {
  const products = userShopChoix;
  const onHandleClickPanier = (product) => {
    if (panierStore.find((produit => produit.id === product.id))) {
    } else {
      const NewProduct = {
        ...product,
        quantite: 1,
      };
      onPanier(NewProduct);
    }
  };
  return (
    <div id="produits">
      <div id="produits-header">
        <h3>Produits :</h3>
      </div>
      <div id="categorie-card">
        <Segment id="segment">
          <Card.Group itemsPerRow={4} stackable doubling>
            {products.map((product) => (
              <Card>
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                </Card.Content>
                <div className="ui move up reveal">
                  <div className="visible content">
                    <Image src={product.image} wrapped />
                  </div>
                  <div className="hidden content">
                    <p>{product.description}
                    </p>
                  </div>
                </div>
                <Card.Content>
                  <button type="button" className="ui basic button">
                    <i className="icon plus" />
                Infos
                  </button>
                </Card.Content>
                <Card.Content extra>
                  <div id="prix">
                    {product.sale === null && (
                    <strong>{product.price}€</strong>
                    )}
                    {product.sale !== null && (
                      <div>
                        <p id="promo">PROMO - {product.sale} % </p>
                        <strong id="former-price">{product.price}€</strong>
                        <strong>{(product.price - (product.price * (product.sale / 100))).toFixed(2)} €</strong>
                      </div>
                    )}
                    <p>{product.unit}</p>
                  </div>
                  <div id="cartico">
                    <button type="button" key={product.id} onClick={() => {onHandleClickPanier(product), setCount(count + 1)}}>
                      <Icon name="cart plus" size="big" />
                    </button>
                  </div>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Segment>
      </div>
    </div>
  );
};

Produits.propTypes = {
  panierStore: PropTypes.object.isRequired,
  onPanier: PropTypes.func.isRequired,
  userShopChoix: PropTypes.object.isRequired,
};
export default Produits;
