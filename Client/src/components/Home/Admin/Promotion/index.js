import React from 'react';
import { Breadcrumb, Card, Modal, Button, Image, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import SuccessModal from 'src/containers/SuccessModal';

import './promotion.scss';

const Promotion = ({
  handleChangeDeletingCloseModal,
  handleChangeDeletingOpenModal,
  openDeletingModal,
  promotions,
  handleDeletePromotionAdmin,
  loading,
}) => {
  const handleOpenModal = (evt) => {
    const id = evt.target.value;
    handleChangeDeletingOpenModal(id);
  };

  const handleCloseModal = () => {
    handleChangeDeletingCloseModal();
  };

  const handleDeletePromotion = () => {
    handleDeletePromotionAdmin();
  };
  return (
    <div id="promotion">
      <div id="promotion-header">
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
            <Breadcrumb.Section active>Supprimer une promotion</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <h3 id="promotion-title">Supprimer une promotion :</h3>
        <h4 id="promotion-sub-title">Sélectionner une promotion parmis votre liste : </h4>
      </div>
      <div id="promotion-list">
        <Segment id="promotion-segment">
          {promotions !== undefined && (
            promotions.map((promotion) => (
              <div id="cards">
                <Card.Group stackable doubling>
                  {promotion.sale > 0.00 && (
                  <Card key={promotion.id}>
                    <Card.Content>
                      <Card.Header>{promotion.name}<br /> - {promotion.sale} %</Card.Header>
                      {promotion.image !== null && (
                      <Image
                        centered
                        size="large"
                        src={promotion.image}
                      />
                      )}
                      {promotion.image === null && (
                      <Image src="/images/wireframe/image.png" size="medium" disabled />
                      )}
                      <Card.Description>
                        {promotion.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Modal
                          trigger={<Button basic color="red" value={promotion.id} onClick={handleOpenModal}>Supprimer la promotion</Button>}
                          closeIcon
                          size="small"
                          centered={false}
                          open={openDeletingModal}
                          onClose={handleCloseModal}
                        >
                          {loading === true && (
                          <Dimmer active inverted>
                            <Loader inverted>Chargement...</Loader>
                          </Dimmer>
                          )}
                          {loading === false && (
                            <Dimmer inactive>
                              <Loader>Chargement...</Loader>
                            </Dimmer>
                          )}
                          <Modal.Content>
                            <p>Êtes-vous sûr de vouloir supprimer cette promotion ?</p>
                          </Modal.Content>
                          <Modal.Actions>
                            <Button onClick={handleCloseModal} negative>Non</Button>
                            <Button
                              positive
                              icon="checkmark"
                              labelPosition="right"
                              content="Oui"
                              value={promotion.id}
                              onClick={handleDeletePromotion}
                            />
                          </Modal.Actions>
                        </Modal>
                      </div>
                    </Card.Content>
                  </Card>
                  )}
                </Card.Group>
              </div>
            ))
          )}
        </Segment>
      </div>
      <SuccessModal />
    </div>
  );
};
Promotion.propTypes = {
  handleDeletePromotionAdmin: PropTypes.func.isRequired,
  promotions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
      price: PropTypes.string.isRequired,
      sale: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      unit: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
      createdat: PropTypes.string,
      updatedat: PropTypes.string,
    }).isRequired,
  ).isRequired,
  handleChangeDeletingCloseModal: PropTypes.func.isRequired,
  handleChangeDeletingOpenModal: PropTypes.func.isRequired,
  openDeletingModal: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Promotion;
