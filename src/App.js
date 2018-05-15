import React from 'react';
import Carto from './containers/Carto'
import Tableau from './containers/Tableau';
import Meta from './containers/Meta';
import Territoire from './containers/Territoire';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';


const App = () => (
  <div>
    <Jumbo />
    <Territoire /> 
    <Meta /> <br/>
    <Tableau /> <br/>
	<Carto/> <br/>
    <Footer />
  </div>
)

export default App

