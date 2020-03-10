import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import TopLevel from './components/main/TopLevel';
import {Provider} from 'react-redux';
import configureStore from './store';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={configureStore()}>
      <TopLevel />
    </Provider>
  </BrowserRouter>, document.getElementById('root')
);

// If you want your TopLevel to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();