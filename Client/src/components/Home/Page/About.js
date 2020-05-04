import React from 'react';
import { List, Segment, Icon } from 'semantic-ui-react';
import './about.scss';

const About = () => (
  <div id="about-main">
    <h2>A Propos de nous</h2>
    <div id="description">
      <Segment>
        <div id="about">
          <h3>Présentation :</h3>
          <p>
            Souhaitant conccurencer la grande distribution, tout en agissant activement pour la planète, Local Drive apporte aux
            commerçants et aux producteurs de petits villages, une plateforme de drive totalement dynamisé.<br/>
            Inscrit dans l'esprit Open Source, Local Drive est totalement ouvert, ce qui le rend très accessible à toutes les mairies.<br/>
            Même pour vous, commerçants, l'investissement reste minime et s'inscrit dans la lignée de votre commerce :
            un lecteur de cartes bleues, si vous n'en avez pas encore.
          </p>

          <h3>Etapes de mise en place :</h3>
          <List>
            <List.Item icon="check" content="Votre mairie met en place Local-Drive dans son village." />
            <List.Item icon="check" content="Un développeur de notre équipe s'occupe de préparer votre Drive personnalisé" />
            <List.Item icon="check" content="Vos commerçants s’équipent d'un système de paiement, et aménage éventuellement son magasin ( file d’attente réservée par exemple )." />
            <List.Item icon="check" content="En tant que client, vous vous rendez sur le site www.local-drive.fr/, et passez commande, sur des produits frais, locaux et de saison." />
            <List.Item icon="check" content="Votre commande est prise en compte, un récapitulatif est envoyé au(x) commerçant(s) qui prépare(nt) votre commande et la conserve." />
            <List.Item icon="check" content="Enfin, vous choisissez un horaire de retrait, et vous procédez au paiement, exactement comme dans un drive classique." />
          </List>
        </div>
      </Segment>
    </div>
  </div>


);

export default About;
