import React from 'react';

import Carto from './containers/Carto';
import Feature from './containers/Feature';
import Liste from './containers/Liste';
import Meta from './containers/Meta';
import Slide from './containers/Slide';
import Systemic from './containers/Systemic';
import Tableau from './containers/Tableau';
import Territoire from './containers/Territoire';
import Titre from './containers/Titre';

import Footer from './components/Footer';
import Jumbo from './components/Jumbo';



const App = () => (
  <div id="layout">
    <main>
      <section id="sidebar">
        <div id="sidebar-logo"></div>
        <Titre />
        <nav className="main-menu">
      	  <Systemic />
      	  <Tableau />
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

