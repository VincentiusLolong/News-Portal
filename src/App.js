import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import News from './pages/News';
import Dashboard from './pages/Dashboard';
import DashboardList from './pages/DashboardList';
import Account from './pages/Account';
import Register from './pages/Register';
import NotFound from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard-list" component={DashboardList} />
        <Route exact path="/news/:id" component={News} />
        <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
