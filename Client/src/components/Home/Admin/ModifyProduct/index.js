import React from 'react';

import 'src/components/Home/Admin/Modify/modify.scss';

import { Breadcrumb, Card, Segment, Image, Icon, Button, Modal, Header, Input, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SuccessModalAddPromotion from 'src/containers/SuccessModalAddPromotion';

const ModifyProduct = ({
  productsCommercant,
  loading,
  handleGiveProductStore,
  loneProduct,
  handleAddPromotionStore,
  handleAddToSaleStore,
}) => {
  // Définit la const produit à un tableau vide avant l'arrivée des données
  // Ou le tableau products
  const produits = productsCommercant.products || [];
  const handleGiveProduct = (product) => {
    handleGiveProductStore(product);
  };
  const handleAddToSale = (evt) => {
    const toSale = evt.target.value;
    handleAddToSaleStore(toSale);
  };
  const handleAddPromotion = () => {
    handleAddPromotionStore(loneProduct);
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
            <Breadcrumb.Section active>Ajouter une promotion</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <h2 id="modify-title">Ajouter une promotion :</h2>
        <h3 id="modify-sub-title">Veuillez sélectionner un produit auquel ajouter une promotion :</h3>
      </div>
      <div id="product-list">
        <Segment id="segment">
          <Card.Group itemsPerRow={4} centered stackable>
            {produits.map((product) => (
              <div id="product-item" onClick={() => handleGiveProduct(product)}>
                <Card>
                  {product.image !== null && (
                    <Image src={product.image} wrapped ui={false} bordered />
                  )}
                  {product.image === null && (
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" wrapped ui={false} bordered />
                  )}
                  <Card.Content>
                    <Card.Header>{product.name}</Card.Header>
                    <Card.Description>
                      {product.description}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                    <Modal closeIcon onClose={handleAddPromotion} trigger={<Button>Ajouter une promotion</Button>}>
                      <Modal.Header>{product.name}</Modal.Header>
                      <Modal.Content image>
                        <Image wrapped size="medium" src={product.image || 'https://react.semantic-ui.com/images/wireframe/image.png'} />
                        <Modal.Description>
                          <Header>Modifier {product.name} :</Header>
                          <h4>Description du produit :</h4>
                          <p>
                            {product.description}
                          </p><br />
                          <Input labelPosition="right" type="text" placeholder="Pourcentage de remise">
                            <Label basic>-</Label>
                            <input onChange={handleAddToSale} />
                            <Label>%</Label>
                          </Input><br />
                          {product !== undefined && (
                            <Label basic>Prix actuel : {(product.price)}€</Label>
                          )}
                        </Modal.Description>
                      </Modal.Content>
                      <Modal.Actions>
                        {loading === false && (
                          <Button primary onClick={handleAddPromotion}>
                            Mettre en promotion <Icon name="right chevron" />
                          </Button>
                        )}
                        {loading === true && (
                          <Button loading primary>Loading</Button>
                        )}
                      </Modal.Actions>
                    </Modal>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Card.Group>
        </Segment>
      </div>
      <SuccessModalAddPromotion />
    </div>
  );
};

ModifyProduct.propTypes = {
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
  loneProduct: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    sale: PropTypes.string,
    description: PropTypes.string,
    unit: PropTypes.string,
    stock: PropTypes.string,
    createdat: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  handleAddPromotionStore: PropTypes.func.isRequired,
  handleAddToSaleStore: PropTypes.func.isRequired,
};

export default ModifyProduct;
