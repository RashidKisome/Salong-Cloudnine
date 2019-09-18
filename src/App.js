import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from './components/index/index.js';
import Salong from './components/salong/salong.js';

/* Här hade jag tänkt ge salong en sånhär path, <Route path="/salong/id:" istället
så att jag kunde länka till de olika sidorna dynamiskt istället för en statisk. */

/* J:   Jag fyllde i det du hade tänkt göra med att skicka med parameter till salongssidan
*       i denna fil är det inte konstigare än att lägga till en parameter i path:en*/

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Index} />
        <Route path="/salong/:id" component={Salong} />
      </div>
    </Router>
  );
}

export default App;
