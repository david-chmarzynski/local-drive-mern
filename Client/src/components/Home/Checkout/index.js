import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Segment, Button, Icon, Grid, Modal } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './checkout.scss';
import CheckProduct from 'src/containers/Checkout/CheckProduct';
import Login from 'src/containers/Login';

const Checkout = ({
  panier,
  total,
  logged,
  handleChangeOpenModal,
  handleChangeCloseModal,
  openModal,
  shops,
  user,
  userShopChoixName,
}) => {
  const userdetail = user.map((eltUser) => (
    eltUser.firstname
  ));

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'default_service', templateId,
      variables,
    ).then(res => {
      console.log('Email successfully sent!');
    })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  };

  const submitEmail = () => {
    const templateId = 'template_bjlV0xJV';
    const userName = userdetail;
    sendFeedback(templateId, {message_html: 'Vous avez recu une nouvelle commande, veuillez vous connecter à votre espace Admin', from_name: userName, to_name: userShopChoixName, reply_to: '' })
  };


  const Total = total.map((item) => (
    item.Total
  ));

  const Quantite = total.map((item) => (
    item.Quantite
  ));

  const handleOpenModal = () => {
    handleChangeOpenModal();
  };

  const handleCloseModal = () => {
    handleChangeCloseModal();
  };

  return (
    <div id="checkout">
      <div id="breadcrumb">
        <Breadcrumb>
          <NavLink to="/">
            <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Paiement</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      <div>
        <Grid.Row id="produit">
          <div id="prod">
            <Grid columns={5} textAlign="center">
              <Grid.Row verticalAlign="middle" textAlign="center">
                <Grid.Column width={7}>
                  <strong>Total commande</strong>
                </Grid.Column>
                <Grid.Column width={4}>
                  <div id="quantite">
                    <strong>{Quantite} article(s)</strong>
                  </div>
                </Grid.Column>
                <Grid.Column width={2}>
                  <strong>{Total} €</strong>
                </Grid.Column>
                {logged && (
                <Grid.Column width={3} textAlign="right">
                  <div id="btn-pay">
                    <NavLink to="">
                      <Button icon labelPosition="right" color="green" onClick={submitEmail}>
                      Passer au Paiement
                        <Icon name="right arrow" />
                      </Button>
                    </NavLink>
                  </div>
                </Grid.Column>
                )}
                {!logged && (
                <Grid.Column width={3} textAlign="right">
                  <div id="login-btn">
                    <Modal
                      trigger={<Button id="connexionPanier" color="red" onClick={handleOpenModal}>Connectez vous pour payer</Button>}
                      closeIcon
                      size="small"
                      centered={false}
                      open={openModal}
                      onClose={handleCloseModal}
                    >
                      <Modal.Content id="login">
                        <Login />
                      </Modal.Content>
                    </Modal>
                  </div>
                </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Row>
        {panier.map((products) => (
          <Segment id="produit" style={{ overflow: 'auto', maxHeight: '50vh' }}>
            <CheckProduct
              key={products.id}
              id={products.id}
              produit={products}
              name={products.name}
              price={products.price}
              image={products.image}
              Value={products.prix}
              quantite={products.quantite}
            />
          </Segment>
        ))}
      </div>
    </div>
  );
};

Checkout.propTypes = {
  userShopChoixName: PropTypes.string.isRequired,
  shops: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
  handleChangeOpenModal: PropTypes.func.isRequired,
  handleChangeCloseModal: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  total: PropTypes.array.isRequired,
  panier: PropTypes.array.isRequired,

};

export default Checkout;
