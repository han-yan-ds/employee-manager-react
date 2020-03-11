import React from 'react';
import {connect} from 'react-redux';
import {State, ClickHandler} from '../../types/types';
import {logOut, logIn} from '../../actions/actions';

function mapStateToProps(st: State) {
  const {isLoggedIn} = st;
  return {isLoggedIn};
}

function mapDispatchToProps(dispatch: Function) {
  return {
    handleLogOut: () => dispatch(logOut()),
    handleLogIn: () => dispatch(logIn())
  }
}

const Header = ({isLoggedIn, handleLogIn, handleLogOut}: {isLoggedIn: boolean, handleLogIn: ClickHandler, handleLogOut: ClickHandler}) => {
  let buttonText = (isLoggedIn) ? 'Log Out' : 'Log In';
  let handleClick = (isLoggedIn) ? handleLogOut : handleLogIn;
  return <header>
    <button onClick={handleClick}>{buttonText}</button>
  </header>
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);