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
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action
    switch (type) {
        case User_ACTION_TYPES.SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: payload
            }
            break;
        case User_ACTION_TYPES.SIGN_IN_FAILED:
            return{
                ...state,
                error: payload
            }
            break;
    
        default:
            return state;
    }
}
