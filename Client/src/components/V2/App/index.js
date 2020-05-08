// == Import : npm
import React from 'react';
// == Import : local
import './app.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from 'src/containers/HeaderDesk';
import Home from 'src/components/V2/Layout/Home';
import Footer from 'src/components/V2/Layout/Footer';
import HomeAdmin from 'src/components/V2/Admin/HomeAdmin';
import ProductManager from 'src/containers/Admin/ProductManager';
import ProductAdd from 'src/containers/Admin/ProductAdd';
import Error404 from 'src/components/V2/Layout/Error404';


// == Composant
const App = ({ isLogged, currentUser }) => {

  // Privatisation des routes Admin, si user connecté et si user est un shop
  const secureForAdmin = () => {
    if (currentUser && isLogged && currentUser.local.isShop) {
      return (
        <>
        <Route exact path="/admin" component={HomeAdmin} />
        <Route exact path="/admin/informations"/>
        <Route exact path="/admin/produits" component={ProductManager}/>
        <Route exact path="/admin/boutique" />
        <Route exact path="/admin/add/product" component={ProductAdd} />
        </>
      )
    } else {
      return (
        <>
        <Route exact path="/admin" component={Error404} />
        <Route exact path="/admin/informations"/>
        <Route exact path="/admin/produits" component={Error404}/>
        <Route exact path="/admin/boutique" />
        <Route exact path="/admin/add/product" component={Error404} />
        </>
      )
    }
  }
  return (
    <div id="app">
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      {secureForAdmin()}
      </Switch>
      <Footer />
    </div>
  );
};
// == Export
export default App;
