import React from 'react';
import {connect} from 'react-redux';
import {State, ClickHandler} from '../../types/types';
import {logOut, logIn} from '../../actions/actions';
import {Button} from 'react-bootstrap';

function mapStateToProps(st: State) {
  const {isLoggedIn} = st;
  return {isLoggedIn};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleLogOut: () => dispatch(logOut()), // add stuff to redirect to /logout
    handleLogIn: () => dispatch(logIn()) // add stuff to redirect to /app
  }
}

const Header = ({isLoggedIn, handleLogIn, handleLogOut}: {isLoggedIn: boolean, handleLogIn: ClickHandler, handleLogOut: ClickHandler}) => {
  let buttonText = (isLoggedIn) ? 'Log Out' : 'Log In';
  let handleClick = (isLoggedIn) ? handleLogOut : handleLogIn;
  return <header>
    <Button variant='dark' id='logout-button' onClick={handleClick}>{buttonText}</Button>
  </header>
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);