// == Import : npm
import React from 'react';
// == Import : local
import './app.scss';


import Header from 'src/components/V2/Layout/Header/HeaderDesk';
import Home from 'src/components/V2/Layout/Home';
import Footer from 'src/components/V2/Layout/Footer';

// == Composant
const App = () => {
  return (
    <div id="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};
// == Export
export default App;
