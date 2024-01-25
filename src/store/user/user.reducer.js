import { createSlice } from "@reduxjs/toolkit"; //> replace the reducer function and creates actions and action types for us


const INITIAL_STATE = {
    currentUser: null,
}


export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload
        }
    }
})

 
export const { setCurrentUser } = userSlice.actions; //> export the action creator function... createSlice() returns an object "userSlice" which has a property "actions" which is an object that has all the action creators in it by the name you provided in "reducers" ... so we destructure it and get the action creator function we want

export const userReducer = userSlice.reducer //> under the reducer we get the reducer function which look something like what we created below in the userReducer function

//? userSlice(returned object) contains 5 properties : name, initialState, reducers, actions, reducer


//> name : in the use.types.js file you use "user/SET_CURRENT_USER" that 'user' is the thing we provide in it ... also called "name for the slice"
//> reducers : object where keys are action name and values are function which describes the state change in response to that action
//? setCurrentUser() {} is same as setCurrentUser: () => {} ... we use this syntax when we want to mutate the state directly and not return a new state object

//* NOTE : States are immutable in Redux ... cant change them directly ... we have to return a new state object from the reducer function... But in RTK it may seem you change the state directly but behind the scenes a library "IMMER" is used to make it work bcoz states are immutable, cant change them like this





//! Before RTK
/*
// this is literally the reducer and here we have same reducer used in user.context.jsx but only with few tweaks 

//? 1. we have give state a default value of INITIAL_STATE bcoz we want the state to be initialized with the INITIAL_STATE object when the app loads for the first time.... we don't have useReducer hook here so we can't pass the INITIAL_STATE object as the second argument to initialize the state with it so we do it this way

//> 2. we return state from the default case of the switch statement bcoz we want to return the state as it is if the action type does not match any of the cases and to let the react know that state don't nned to be updated/re-rendered... we do it bcoz every reducer receives every action that gets fired even if the action is not related to that reducer in redux (in context dispatch only targets the state with which it is connected to by useReducer)... so we need to return the state as it is if the action type does not match any of the cases

//? 3. export the reducer function


// export const User_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// } //> moving to new file and importing it below
import { User_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case User_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            }
            break;
    
        default:
            return state;
    }
}

*/