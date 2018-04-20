import React from 'react';
import Tableau from './containers/Tableau';
import Meta from './containers/Meta';
import Territoire from './containers/Territoire';
import Jumbo from './components/Jumbo';
import Footer from './components/Footer';
import Carlitto from './components/Carlitto'


const App = () => (
  <div>
    <Jumbo />
    <Territoire /> 
    <Meta /> <br/>
    <Tableau /> <br/>
	<Carlitto/> <br/>
    <Footer />
  </div>
)

export default App

