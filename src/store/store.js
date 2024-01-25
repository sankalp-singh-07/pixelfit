import { configureStore } from "@reduxjs/toolkit";  //> Takes place of createStore and applyMiddleware

import { rootReducer } from './root-reducer'; //> remains same where we import our root reducer

//? For the middleware
import logger from 'redux-logger'; //> remains same

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean);


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleWares)
})
//> configureStore : accepts an object as an argument that has a reducer property pointing to root reducer and it returns a store object which we can use in our app ... can also add middlewares using "middleware" property which accepts array

//? #NOTE => RTK comes with 3 default middlewares(thunk, Serializability Check Middleware, Immutable State Invariant) and if you add your own middlewares it will overwrite the default ones and you will lose them ... so it is usually recommended to add your own middlewares to the default ones by getting them and concating your own to them and then adding to the middleware property 

//* NOTE : we can remove the non-serializable value error with 2 methods firstly by making the payload serializable (which we did in app.jsx) or by makingthe default Serializability Check Middleware value false by passing it as an object in the getDefaultMiddleware()




//! Before Toolkit

// import {compose, applyMiddleware, createStore} from 'redux'; 

// //> compose is used to combine multiple store enhancers into one; 
// //> applyMiddleware is used to apply middleware to the store; 
// //> createStore is used to create a new redux store where state lives

// import logger from 'redux-logger'; //> allows us to see what the state looks like before and after actions are fireds and what actions are fired ... a type of middleware

// import { rootReducer } from './root-reducer';


// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'root', //> key is the point where we want to start storing everything and root means everything starting from the root

//     storage, //> storage is the actual storage object we are going to use from redux-persist/lib/storage which is local storage in our case

//     blacklist: ['user'] //> blacklist is an array containing the string names of any of the reducers that we want to exclude from being persisted
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);



// // creating our own middleware logger using curryimg function logic
// // const loggerMiddleware = store => next => action => {
// //     if(!action.type) {
// //         return 
// //     }

// //     console.log('type : ', action.type);
// //     console.log('payload : ', action.payload);
// //     console.log('currentState : ', store.getState());

// //     next(action);

// //     console.log('nextState : ', store.getState());
// // }

// // const middleWaresbyUs = [loggerMiddleware];



// //? To only show logger when you are not in production mode
// const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean); //> middlewares runs before an action reaches the root reducer which helps us to catch the action and display it

// //> And for middlewares to actually work we need to use applyMiddleware() function inside compose() function and pass it as a third argument to createStore() function


// const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //> this line is used to enable redux devtools extension in the browser

// const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares)) //> This line creates a store enhancer that applies the middleware

// // export const  store = createStore(rootReducer, undefined, composeEnhancers) //> 2nd argument is the initial state of the application in this case we don't need it so we pass undefined ... it is a way of saying, "I'm not providing any initial state; please use whatever the reducers define as their default initial state." ... 3rd argument is optional and it is used to enhance the store with third-party capabilities such as middleware, time travel, persistence, etc.


// export const store = createStore(persistedReducer, undefined, composeEnhancers)

// export const persistor = persistStore(store)


// //? createStore() function : The store is created by the createStore function. It lets you read the state via 'getState', dispatch actions via 'dispatch', and listen to state changes via 'subscribe' . It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.


// //? what is a redux store? redux store is an object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners


// //? what is enhancer? Enhancers in Redux are functions that can enhance the store with additional capabilities. They are similar to middleware but operate at a higher level - they can apply changes to the store itself, not just to the actions and state. For example, the compose function used above is an enhancer that combines multiple store enhancers (like middleware) into one.