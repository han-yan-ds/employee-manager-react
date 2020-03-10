import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

// const initialState = {
//   employeeList: 
// }

function configureStore() {
  return createStore(
    rootReducer, 
    // initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;