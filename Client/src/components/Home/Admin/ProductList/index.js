import React from 'react';
import { Modal, Image, Header, Button, Card, Icon, Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './product-list.scss';

const ProductList = ({
  handleChangePromotionOpenModal,
  handleChangePromotionCloseModal,
  openPromotionModal,
  loneProduct,
}) => {
  const openPromoModal = () => {
    handleChangePromotionOpenModal();
  };

  const closePromoModal = () => {
    handleChangePromotionCloseModal();
  };

  return (
    <div id="productlist">
      <div id="breadcrumb">
        <Breadcrumb>
          <NavLink to="/">
            <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Admin</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <Card.Group>
        <div id="modale">
          <Modal
            id="promotion-modal"
            trigger={(
              <Card
                image={loneProduct.image || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                header={loneProduct.name}
                description={loneProduct.description}
                onClick={openPromoModal}
              />
          )}
            open={openPromotionModal}
            onClose={closePromoModal}
          >
            <Modal.Content image>
              {loneProduct.image !== null && (
                <Image
                  wrapped
                  size="medium"
                  src={loneProduct.image}
                />
              )}
              {loneProduct.image === null && (
                <Image
                  wrapped
                  size="medium"
                  src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                />
              )}
              <Modal.Description>
                <Header>{loneProduct.name}</Header>
                <h3>{loneProduct.description}</h3>
                <p>
                  Entrez le pourcentage de remise que vous voulez effectuer :
                </p>
                <Icon name="minus" />
                <textarea name="" id="promotion-number" cols="1" rows="1" />
                <Icon name="percent" />
              </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button color="black" onClick={closePromoModal}>
                Annuler
              </Button>
              <Button
                positivelaceholder="10"
                icon="checkmark"
                labelPosition="right"
                content="Valider"
                type="submit"
                onClick={closePromoModal}
              />
            </Modal.Actions>
          </Modal>
        </div>
      </Card.Group>
    </div>
  );
};

ProductList.propTypes = {
  handleChangePromotionOpenModal: PropTypes.func.isRequired,
  handleChangePromotionCloseModal: PropTypes.func.isRequired,
  openPromotionModal: PropTypes.func.isRequired,
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
};

export default ProductList;
