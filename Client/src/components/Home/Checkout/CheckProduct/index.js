import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import '../checkout.scss';


const CheckProduct = ({
  name,
  image,
  Value,
  quantite,
}) => {

  return (
    <Grid.Row id="prod">
      <Grid columns={5}>
        <Grid.Row verticalAlign="middle" textAlign="center">
          <Grid.Column width={3}>
            <Image src={image} size="tiny" wrapped />
          </Grid.Column>
          <Grid.Column width={4}>
            <em>{name}</em>
          </Grid.Column>
          <Grid.Column width={4}>
            <div id="quantite">
              <strong>{quantite} article(s)</strong>
            </div>
          </Grid.Column>
          <Grid.Column width={2}>
            <strong>{Value.toFixed(2)} €</strong>
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Grid.Row>

  );
};

CheckProduct.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  Value: PropTypes.number.isRequired,
  quantite: PropTypes.number.isRequired,
};
export default CheckProduct;
