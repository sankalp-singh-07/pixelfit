import {compose, applyMiddleware, createStore} from 'redux'; 

//> compose is used to combine multiple store enhancers into one; 
//> applyMiddleware is used to apply middleware to the store; 
//> createStore is used to create a new redux store where state lives

import logger from 'redux-logger'; //> allows us to see what the state looks like before and after actions are fireds and what actions are fired ... a type of middleware


import { rootReducer } from './root-reducer';

// creating our own middleware logger using curryimg function logic
// const loggerMiddleware = store => next => action => {
//     if(!action.type) {
//         return 
//     }

//     console.log('type : ', action.type);
//     console.log('payload : ', action.payload);
//     console.log('currentState : ', store.getState());

//     next(action);

//     console.log('nextState : ', store.getState());
// }

const middleWaresbyUs = [loggerMiddleware];


const middleWares = [logger]; //> middlewares runs before an action reaches the root reducer which helps us to catch the action and display it

//> And for middlewares to actually work we need to use applyMiddleware() function inside compose() function and pass it as a third argument to createStore() function

const composeEnhancers = compose(applyMiddleware(...middleWares)) //> This line creates a store enhancer that applies the middleware

export const  store = createStore(rootReducer, undefined, composeEnhancers) //> 2nd argument is the initial state of the application in this case we don't need it so we pass undefined ... it is a way of saying, "I'm not providing any initial state; please use whatever the reducers define as their default initial state." ... 3rd argument is optional and it is used to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.

//? createStore() function : The store is created by the createStore function. It lets you read the state via 'getState', dispatch actions via 'dispatch', and listen to state changes via 'subscribe' . It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.


//? what is a redux store? redux store is an object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners


//? what is enhancer? Enhancers in Redux are functions that can enhance the store with additional capabilities. They are similar to middleware but operate at a higher level - they can apply changes to the store itself, not just to the actions and state. For example, the compose function used above is an enhancer that combines multiple store enhancers (like middleware) into one.