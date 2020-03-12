import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import {State} from '../types/types';

function mapStateToProps(state: State) {
  const isLoggedIn = state.isLoggedIn;
  return {isLoggedIn};
}

const Router = (state: State) => (
  <main>
    <Switch>
      <Route
        exact
        path='/login'
        component={Login}
      />
      <Route path='/'>
        {(state.isLoggedIn) ? App : <Redirect to='/login'/>}
      </Route>
    </Switch>
  </main>
)

export default connect(mapStateToProps, null)(Router);