// == Import : npm
import React from 'react';
// == Import : local
import './app.scss';


import Header from 'src/containers/Header';
import Footer from 'src/components/Home/Footer';
import Main from 'src/containers/Main';

// == Composant
const App = () => {
  return (
    <div id="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
// == Export
export default App;
