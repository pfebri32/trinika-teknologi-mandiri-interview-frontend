import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components.
import NavigationA from './components/navigations/NavigationA';

// Pages.
import Dashboard from './pages/Dashboard';
import AddEvent from './pages/events/AddEvent';
import Home from './pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationA />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route path="/event/add" exact>
          <AddEvent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
