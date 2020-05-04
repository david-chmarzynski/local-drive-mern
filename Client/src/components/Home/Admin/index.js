import React from 'react';
import { Icon, Menu, Button, Image, Breadcrumb, Divider, Grid } from 'semantic-ui-react';
import './admin.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Admin = ({
  handleAddAdminMenu,
  handleModifyAdminMenu,
  handlePromotionAdminMenu,
  userCommercant,
  handleAddPromotionMenu,
}) => {
  // Appel de fonction qui charge la liste des produits
  const handleAddPromotion = () => {
    handleAddPromotionMenu();
  };
  // Appel de fonction qui charge la liste des catégories
  const handleAddAdmin = () => {
    handleAddAdminMenu();
  };
  // Appel de fonction qui charge les catégories && les données userCommercant
  const handleModifyAdmin = () => {
    handleModifyAdminMenu();
  };
  // Appel de fonction qui charge la liste des produits en promotions
  const handlePromotionAdmin = () => {
    handlePromotionAdminMenu();
  };

  const dynamicWidth = window.innerWidth;
  return (
    <div id="admin">
      <div id="breadcrumb">
        <Breadcrumb>
          <NavLink to="/">
            <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Admin</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      {dynamicWidth >= 955 && (
        <div id="admin-menu">
          <Menu icon="labeled" vertical>
            <NavLink to="/Admin/Add" onClick={handleAddAdmin}>
              <Menu.Item name="add product">
                <Icon name="plus" />
                  Ajouter un produit
              </Menu.Item>
            </NavLink>

            <NavLink to="/Admin/Modify" onClick={handleModifyAdmin}>
              <Menu.Item name="edit product">
                <Icon name="edit" />
                  Modifier un produit
              </Menu.Item>
            </NavLink>
            <NavLink to="/Admin/AddPromotion" onClick={handleAddPromotion}>
              <Menu.Item name="edit shop">
                <Icon name="euro sign" />
                  Ajouter une promotion
              </Menu.Item>
            </NavLink>
            <NavLink to="/Admin/ManagePromotion" onClick={handlePromotionAdmin}>
              <Menu.Item name="edit shop">
                <Icon name="euro sign" />
                Gérer mes promotions
              </Menu.Item>
            </NavLink>
          </Menu>
        </div>
      )}
      {dynamicWidth <= 954 && (
        <div id="admin-menu">
          <Menu icon="labeled" horizontal>
            <NavLink to="/Admin/Add" onClick={handleAddAdmin}>
              <Menu.Item name="add product">
                <Icon name="plus" />
                  Ajouter un produit
              </Menu.Item>
            </NavLink>

            <NavLink to="/Admin/Modify" onClick={handleModifyAdmin}>
              <Menu.Item name="edit product">
                <Icon name="edit" />
                  Modifier un produit
              </Menu.Item>
            </NavLink>
            <NavLink to="/Admin/AddPromotion" onClick={handleAddPromotion}>
              <Menu.Item name="edit shop">
                <Icon name="euro sign" />
                  Ajouter une promotion
              </Menu.Item>
            </NavLink>
            <NavLink to="/Admin/ManagePromotion" onClick={handlePromotionAdmin}>
              <Menu.Item name="edit shop">
                <Icon name="euro sign" />
                Gérer mes promotions
              </Menu.Item>
            </NavLink>
          </Menu>
        </div>
      )}
      <div id="menu-display">
        <div id="menu-display-promo">
          <h3 id="menu-display-title">Mon Magasin:</h3>
          <Divider section />
          <div id="admin-display-personal">
            {dynamicWidth >= 955 && (
              <Grid>
                <Grid.Column width={4}>
                  {userCommercant[0].image === null && (
                    <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  )}
                  {userCommercant[0].image !== null && (
                    <Image src={userCommercant[0].image} />
                  )}
                </Grid.Column>
                <Grid.Column width={9}>
                  <div id="menu-display-exerpt">
                    <h4 id="menu-display-personal-title">
                      {userCommercant[0].job} {userCommercant[0].name}
                    </h4>
                    <p id="menu-display-personal-description">
                      {userCommercant[0].description}<br />
                    </p>
                    <div id="button-modification">
                      <Button primary animated>
                        <Button.Content visible>Modifier</Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow right" />
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            )}
            {dynamicWidth <= 954 && (
              <Grid>
                <Grid.Column>
                  <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
                  <div id="menu-display-exerpt">
                    <h4 id="menu-display-personal-title">
                      {userCommercant[0].job} {userCommercant[0].name}
                    </h4>
                    <p id="menu-display-personal-description">
                      {userCommercant[0].description}<br />
                    </p>
                    <div id="button-modification">
                      <Button primary animated>
                        <Button.Content visible>Modifier</Button.Content>
                        <Button.Content hidden>
                          <Icon name="arrow right" />
                        </Button.Content>
                      </Button>
                    </div>
                  </div>
                </Grid.Column>
              </Grid>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Admin.propTypes = {
  handleAddAdminMenu: PropTypes.func.isRequired,
  handleModifyAdminMenu: PropTypes.func.isRequired,
  handlePromotionAdminMenu: PropTypes.func.isRequired,
  userCommercant: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    number: PropTypes.string,
    street: PropTypes.string,
    zip: PropTypes.string,
    city: PropTypes.string,
    isShop: PropTypes.bool.isRequired,
  }).isRequired,
  handleAddPromotionMenu: PropTypes.func.isRequired,
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
};
export default Admin;
