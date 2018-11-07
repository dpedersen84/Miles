import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Login';
import Trips from './pages/Trips';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/trips" component={Trips} />
    </Switch>
  </Router>
);

export default App;
