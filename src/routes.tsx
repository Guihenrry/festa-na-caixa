import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';
import Checkout from './pages/Checkout'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/edit" component={Edit} />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
