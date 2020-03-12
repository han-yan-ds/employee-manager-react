import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import Logout from './pages/Logout';

const Router = () => (
  <main>
    <Switch>
      <Route
        exact
        path='/app'
        component={App}
      />
      <Route
        exact
        path='/login'
        component={Login}
      />
      <Route
        exact
        path='/logout'
        component={Logout}
      />
      {/* <Route
        exact
        path='/'
        component={} // DEPENDS ON SESSION WHAT TO FORWARD TO
      /> */}
    </Switch>
  </main>
)

export default Router;