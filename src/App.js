import React from 'react';
import { connect } from 'react-redux';

import LoginModal from './containers/LoginModal';

import Carto from './containers/Carto';
import Feature from './containers/Feature';
import Meta from './containers/Meta';
import Slide from './containers/Slide';
import Systemic from './containers/Systemic';
import Titre from './containers/Titre';

import Footer from './components/Footer';

const App = ({ isLogged }) => (
  <div id="layout">
    <main>
      {isLogged !== true && (
        <LoginModal />
      )}
      <section id="sidebar">
        <div id="sidebar-header">
          <div id="sidebar-logo"></div>
          <Titre isSidebar />
        </div>
        <nav id="main-menu">
          <Systemic />
        </nav>
      </section>
      <section id="map-container">
        <Carto />
        <Titre />
        <Feature />
        <Slide />
        <Meta />
      </section>
    </main>
    <Footer />
  </div>
);

export default connect(
  state => ({
    isLogged: state.doLogin.isLogged,
  }),
)(App);
