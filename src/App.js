import React, { useState } from "react";
import { connect } from "react-redux";

import LoginModal from "./containers/LoginModal";

import Carto from "./containers/Carto";
import Meta from "./containers/Meta";
import Systemic from "./containers/Systemic";
import Titre from "./containers/Titre";
import ResponsiveModal from "./components/ResponsiveModal";
import Footer from "./components/Footer";

import { doLogout, displayResponsiveModal } from "./actions";

import "bootstrap/dist/css/bootstrap.min.css"

const App = ({ isLogged, doLogout, displayResponsiveModal }) => {
  const [showMenu, setShowMenu] = useState(true);

  const btns = [
    { label: "Indices", action: () => displayResponsiveModal("indices") },
    { label: "Crédits", action: () => displayResponsiveModal("credits") }
  ]
  return isLogged !== true ? (
    <LoginModal />
  ) : (
    <div id="layout">
      <main>
        <section id="sidebar">
          <nav id="sidebar-header" className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <div id="sidebar-logo" className="navbar-brand col"></div>
                <button
                  className={`${showMenu ? 'rotate-menu-on' : 'rotate-menu-off'} menu-btn btn btn-outline-light d-md-none`}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" fill="rgba(255,255,255,1)"/></svg> 
                </button>
              <Titre isSidebar className="d-none d-lg-block"/>
            </div>
          </nav>
          {/* display nav if screen < 768px or md bootstrap grid */}
          {showMenu &&
            <nav id="main-menu" className="d-md-none">
              <Systemic />
            </nav>
          }
            {/* display nav if screen >= 768px or md bootstrap grid */}
            <nav id="main-menu" className="d-none d-md-block">
              <Systemic />
            </nav>
            
          {/* <div id="sidebar-footer">
          </div> */}
        </section>
          <section id="map-container">
            <div id="infos-buttons" className="btn-group d-lg-none" role="group" aria-label="Basic example ">
              {
                btns.map(btn =>
                  <button type="button" className="btn btn-primary" onClick={btn.action}>{btn.label}</button>
                )
              }
            </div>
          <Carto />
          <Titre />
          <Meta />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
};

export default connect(
  state => ({
    isLogged: state.doLogin.isLogged
  }),
  { doLogout, displayResponsiveModal }
)(App);
