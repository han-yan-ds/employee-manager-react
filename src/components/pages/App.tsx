import React from 'react';
import EmployeeList from '../employee/EmployeeList';
import Header from './Header';

const App = () => (
  <React.Fragment>
    <Header/>
    <div className="App">
      <EmployeeList/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  </React.Fragment>
);

export default App;
