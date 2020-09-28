import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Home from './pages/Home.js';
import LipstickMatcher from './pages/LipstickMatcher.js';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/find/match" component={LipstickMatcher} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
