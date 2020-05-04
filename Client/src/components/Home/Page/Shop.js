import React from 'react';
import PropTypes from 'prop-types';
import { Card, Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import '../Produits/produits.scss';
import './page.scss';

import Produits from 'src/containers/Produits';

const Shop = ({
  shopData,
  shopChoix,
  shopUserChoixResult,
}) => {
  const shopChoixId = shopData['id'];
  const shopChoixName = shopData['name'];
  shopChoix(shopChoixId, shopChoixName);
  shopUserChoixResult();

  return (
    <div id="shop">
      <div id="breadcrumb">
        <Breadcrumb>
          <NavLink to="/">
            <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <NavLink to="/Result">
            <Breadcrumb.Section link>Recherche</Breadcrumb.Section>
          </NavLink>
          <Breadcrumb.Divider>/</Breadcrumb.Divider>
          <Breadcrumb.Section active>Produits</Breadcrumb.Section>
        </Breadcrumb>
      </div>
      {/* Carte boutique */}
      <div id="shopData">
        <Card.Group itemsPerRow={8} stackable doubling>
          <Card>
            <Card.Content header={shopData['job']} />
            <p>{shopData['name']}</p>
            <Card.Content extra id="searchcard">
              <div>
                <p>{shopData['number']} {shopData['street']}</p>
                <p>{shopData['email']}</p>
                <p>{shopData['phone']}</p>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
      <Produits shop={shopData} />
    </div>
  );
};

Shop.propTypes = {
  shopUserChoixResult: PropTypes.func.isRequired,
  shopChoix: PropTypes.func.isRequired,
  shopData: PropTypes.object.isRequired,
};

export default Shop;
