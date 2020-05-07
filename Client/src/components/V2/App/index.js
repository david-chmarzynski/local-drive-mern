// == Import : npm
import React from 'react';
// == Import : local
import './app.scss';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/containers/HeaderDesk';
import Home from 'src/components/V2/Layout/Home';
import Footer from 'src/components/V2/Layout/Footer';
import HomeAdmin from 'src/components/V2/Admin/HomeAdmin';
import ProductManager from 'src/components/V2/Admin/ProductManager';
import ProductAdd from 'src/containers/Admin/ProductAdd';


// == Composant
const App = () => {
  return (
    <div id="app">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={HomeAdmin} />
        <Route exact path="/admin/informations"/>
        <Route exact path="/admin/produits" component={ProductManager}/>
        <Route exact path="/admin/boutique" />
        <Route exact path="/admin/add/product" component={ProductAdd} />
      </Switch>
      <Footer />
    </div>
  );
};
// == Export
export default App;
