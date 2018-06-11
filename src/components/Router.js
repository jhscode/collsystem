import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Summary from './Summary';
import Counterparties from './Counterparties';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Summary} />
      <Route exact path="/Counterparties" component={Counterparties} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
