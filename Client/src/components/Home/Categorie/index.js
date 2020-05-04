import React from 'react';
import { Card, Breadcrumb, Image, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './categorie.scss';

const Categorie = () => (
  <div id="categorie">
    <div id="breadcrumb">
      <Breadcrumb>
        <NavLink to="/">
          <Breadcrumb.Section link>Accueil</Breadcrumb.Section>
        </NavLink>
        <Breadcrumb.Divider>/</Breadcrumb.Divider>
        <Breadcrumb.Section active>Categorie</Breadcrumb.Section>
      </Breadcrumb>
    </div>
    <div id="categorie-card">
      <h3>Catégories :</h3>
      <Segment>
        <Card.Group itemsPerRow={3} stackable doubling>
          <NavLink to="/Produits">
            <Card link>
              <Image src="src/img/boucherie.jpg" wrapped />
              <Card.Content>
                <Card.Header>Boucherie</Card.Header>
              </Card.Content>
            </Card>
            <Card link>
              <Image src="src/img/boulangerie.jpg" wrapped />
              <Card.Content>
                <Card.Header>Boulangerie</Card.Header>
              </Card.Content>
            </Card>
            <Card link>
              <Image src="src/img/epicerie.jpg" wrapped />
              <Card.Content>
                <Card.Header>Epicerie</Card.Header>
              </Card.Content>
            </Card>
          </NavLink>
        </Card.Group>
      </Segment>
    </div>
  </div>
);

export default Categorie;
