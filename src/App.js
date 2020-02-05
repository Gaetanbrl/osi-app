import React from "react";
import { connect } from "react-redux";

import LoginModal from "./containers/LoginModal";

import Carto from "./containers/Carto";
import Meta from "./containers/Meta";
import Systemic from "./containers/Systemic";
import Titre from "./containers/Titre";

import Footer from "./components/Footer";

import { doLogout } from "./actions";

const App = ({ isLogged, doLogout }) =>
  isLogged !== true ? (
    <LoginModal />
  ) : (
    <div id="layout">
      <main>
        <section id="sidebar">
          <div id="sidebar-header">
            <div id="sidebar-logo"></div>
            <Titre isSidebar />
          </div>
          <nav id="main-menu">
            <Systemic />
          </nav>
          <div id="sidebar-footer">
            <button type="button" onClick={() => doLogout()} className="btn">
              Se déconnecter
            </button>
          </div>
        </section>
        <section id="map-container">
          <Carto />
          <Titre />
          <Meta />
        </section>
      </main>
      <Footer />
    </div>
  );

export default connect(
  state => ({
    isLogged: state.doLogin.isLogged
  }),
  { doLogout }
)(App);
