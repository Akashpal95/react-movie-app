import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

//Curried form of function logger(obj, next, action)
// const logger = function({dispatch , getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION_TYPE = ', action.type);
//       next(action);
//     }
//   }
// }
//Curried form of logger function using arrow function chain
const logger = ({dispatch , getState}) => (next) => (action) =>{
    console.log('ACTION_TYPE = ', action.type);
    next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('store', store);
// console.log('Before State', store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name : 'Superman'}]
// });

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies: [{name : 'Batman'}]
// });

// console.log('After State', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);