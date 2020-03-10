import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
// import {State} from '../src/types/types';

// const initialState: State = {
//   employeeList: [],
//   isLoggedIn: true,
// }

function configureStore() {
  return createStore(
    rootReducer, 
    // initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;