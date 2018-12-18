import React from 'react';

import Carto from './containers/Carto';
import Feature from './containers/Feature';
import Meta from './containers/Meta';
import Slide from './containers/Slide';
import Systemic from './containers/Systemic';
import Titre from './containers/Titre';

import Footer from './components/Footer';


const App = () => (
  <div id="layout">
    <main>
      <section id="sidebar">
        <div id="sidebar-logo"></div>
        <Titre />
        <nav className="main-menu">
      	  <Systemic />
        </nav>
      </section>
      <section className="map-container">
    		<Carto />
    		<Feature />
    		<Slide />
    		<Meta />
      </section>
    </main>
    <Footer />
  </div>
)

export default App

