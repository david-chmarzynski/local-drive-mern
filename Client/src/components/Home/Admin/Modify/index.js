import React from 'react';

import 'src/components/Home/Admin/Modify/modify.scss';

import { Breadcrumb, Card, Segment, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modify = ({ productsCommercant, handleGiveProductStore }) => {
  // Définit la const produit à un tableau vide avant l'arrivée des données
  // Ou le tableau products
  const produits = productsCommercant.products || [];

  const handleGiveProduct = (product) => {
    handleGiveProductStore(product);
  };
  return (
    <div id="modify">
      <div id="modify-header">
        <div id="breadcrumb">
          <Breadcrumb>
            <NavLink to="/">
              <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
            </NavLink>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <NavLink to="/Admin">
              <Breadcrumb.Section link>Admin</Breadcrumb.Section>
            </NavLink>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>Modifier un produit</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <h2 id="modify-title">Modifier un produit :</h2>
        <h3 id="modify-sub-title">Veuillez sélectionner un produit à modifier :</h3>
      </div>
      <div id="product-list">
        <Segment id="segment">
          <Card.Group itemsPerRow={4} centered stackable>
            {produits.map((product) => (
              <div id="product-item" onClick={() => handleGiveProduct(product)}>
                <Card key={product.id}>
                  {product.image !== null && (
                    <Image src={product.image} wrapped ui={false} bordered />
                  )}
                  {product.image === null && (
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" wrapped ui={false} bordered />
                  )}
                  <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Description
                      textAlign="left"
                      content={product.description}
                    />
                  </Card.Content>
                  <Card.Content>
                    <NavLink to={`/Admin/Modify/${product.id}`}>
                      <Button key={product.id} attached="bottom">
                        Modifier
                      </Button>
                    </NavLink>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Card.Group>
        </Segment>
      </div>
    </div>
  );
};

Modify.propTypes = {
  productsCommercant: PropTypes.shape({
    products: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
      createdat: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  handleGiveProductStore: PropTypes.func.isRequired,
};
export default Modify;
