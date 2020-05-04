import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Segment, Grid, Image, Icon } from 'semantic-ui-react';


// == Import Components
import SearchVille from 'src/containers/Search';
import About from 'src/components/Home/Page/About';
import Concept from 'src/components/Home/Page/Concept';
import Mention from 'src/components/Home/Page/Mention';
import Error from 'src/components/Home/Page/Error';
import Admin from 'src/containers/Admin';
import Add from 'src/containers/Admin/Add';
import MonCompte from 'src/containers/MonCompte';
import Produits from 'src/components/Home/Produits';
import Result from 'src/containers/Result';
import Shop from 'src/containers/Page/Shop';
import Promotion from 'src/containers/Admin/Promotion';
import Categorie from 'src/components/Home/Categorie';
import Checkout from 'src/containers/Checkout';
import ProductList from 'src/containers/Admin/ProductList';
import Modify from 'src/containers/Admin/Modify';
import Product from 'src/containers/Admin/Product';
import ModifyProduct from 'src/containers/Admin/ModifyProduct';


import './main.scss';

const Main = ({ isShop, logged }) => {
  const dynamicWidth = window.innerWidth;
  const handleScroll = () => {
    window.scrollTo({
      top: 1200,
      behavior: 'smooth',
    });
  };
  return (
    <div id="main">
      <Switch>
        <Route exact path="/">
          {dynamicWidth >= 955 && (
            <Image src="/src/img/vegetables-stall.jpg" fluid />
          )}
          {dynamicWidth <= 954 && (
          <Image src="/src/img/market-mobile.jpg" fluid />
          )}
          <Icon name="angle double down" id="fleche" className="animated pulse infinite" size="huge" onClick={handleScroll} />
        </Route>
      </Switch>
      <SearchVille />
      <Switch>
        <Route exact path="/Result">
          <Result />
        </Route>
        <Route path="/shop/:slug" component={Shop} />
        <Route exact path="/">
          <div id="titleanimate">
            <h2 className="animated flipInX">Bienvenue chez Local Drive</h2>
          </div>
          <div id="pres">
            <Grid id="presentationSegment" column={2} stackable doubling>
              <Grid.Column width={10} stretched centered>
                <div id="presentation">
                  <video src="../src/img/LOCAL-DRIVE.mp4" controls/>
                </div>
              </Grid.Column>
              <Grid.Column width={5} stretched centered>
                <Segment>
                  <div id="presentation-text">
                    <h2>Qui est Local Drive ?</h2>
                    <p>
                      Local Drive repose sur le concept Drive créé par les grandes enseignes de la distribution alimentaire.
                      Nous souhaitons nous imposer face aux acteurs majeurs de la de grande distribution, afin de faire revivre nos centres villes
                      , en donnant les clés technologiques à des petits commerçants qui proposent des produits de bien meilleures qualités.
                    </p>
                    <p>
                      En choisissant Local Drive, vous participez à la vie de votre village, mais vous faites aussi un acte éco-responsable. Plus besoin de sortir la voiture juste pour
                      faire vos courses, les produits que vous consommez seront de bonne qualité, et proviendront de producteurs locaux.
                    </p>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid>
          </div>
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Concept">
          <Concept />
        </Route>
        <Route exact path="/Mention">
          <Mention />
        </Route>
        <Route exact path="/Admin">
          {logged === true && isShop === true && (
            <Admin />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>
        <Route exact path="/Admin/Add">
          {logged === true && isShop === true && (
            <Add />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/Admin/Modify">
          {logged === true && isShop === true && (
            <Modify />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/Admin/Modify/:id">
          {logged === true && isShop === true && (
            <Product />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/Admin/AddPromotion">
          {logged === true && isShop === true && (
            <ModifyProduct />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/Admin/AddPromotion/:id">
          {logged === true && isShop === true && (
            <ProductList />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/Admin/ManagePromotion">
          {logged === true && isShop === true && (
            <Promotion />
          )}
          {isShop === false && (
            <Error />
          )}
        </Route>,
        <Route exact path="/MonCompte">
          {logged === true && isShop === false && (
            <MonCompte />
          )}
          {logged === false && (
            <Error />
          )}
        </Route>
        <Route exact path="/Categorie">
          <Categorie />
        </Route>,
        <Route exact path="/Checkout">
          <Checkout />
        </Route>,
        <Route exact path="/Produits">
          <Produits />
        </Route>,
        <Route exact path="/404">
          <Error />
        </Route>,
        <Route exact path="/mentions-legales">
          Mentions légales
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
