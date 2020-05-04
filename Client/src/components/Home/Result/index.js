import React from 'react';
import PropTypes from 'prop-types';
import { Card, Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import slugify from 'slugify';

import '../Search/search.scss';

const Result = ({
  shops,
}) => {
  const onShopChoix = (props) => {
    console.log(props);
  };
  return (
    <div className="input">
      <div id="results">
        <div id="breadcrumb-result">
          <Breadcrumb>
            <NavLink to="/">
              <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
            </NavLink>
            <Breadcrumb.Divider>/</Breadcrumb.Divider>
            <Breadcrumb.Section active>Recherche</Breadcrumb.Section>
          </Breadcrumb>
        </div>
        <Card.Group itemsPerRow={4} stackable doubling>
          {shops.map((shop) => (
            <NavLink
              to={`/Shop/${slugify(shop.name)}`}
              exact
              onClick={onShopChoix}
              key={shop.name}
            >
              <Card>
                <Card.Content header={shop.job} />
                <p>{shop.name}</p>
                <Card.Content extra id="searchcard">
                  <div>
                    <p>{shop.street}</p>
                    <p>{shop.city}</p>
                  </div>
                </Card.Content>
              </Card>
            </NavLink>
          ))}
        </Card.Group>
      </div>
    </div>
  );
};

Result.propTypes = {
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Result;
