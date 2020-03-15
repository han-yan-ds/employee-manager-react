import React from 'react';
import {connect} from 'react-redux';
import App from './pages/App';
import Login from './pages/Login';
import {State} from '../types/types';

function mapStateToProps(state: State) {
  const isLoggedIn = state.isLoggedIn;
  return {isLoggedIn};
}

const choosePage = (isLoggedIn: boolean) => (
  (isLoggedIn) ? <App/> : <Login/>
)

const Router = ({isLoggedIn}: {isLoggedIn: boolean}) => (
  <main id="main-container" className="center">
    {choosePage(isLoggedIn)}
  </main>
)

export default connect(mapStateToProps, null)(Router);