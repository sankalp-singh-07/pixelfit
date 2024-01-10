import { createContext, useEffect, useReducer } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reducer.utils';

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const User_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
} //> this object is what we will use to update the state in the reducer

const userReducer = (state, action) => {
    //> the state in the parameter:  The current state of the reducer. Initially, this will be INITIAL_STATE.
    // console.log(action);
    // console.log(state);
    // console.log('dispatch');
    // console.log(INITIAL_STATE);
    const {type, payload} = action; //> destructuring the action object where type is the action type and payload is the data we want to update the state with

    switch (type) {
        case User_ACTION_TYPES.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: payload
            } //> we destructure the state object bcoz we want to update only the currentUser property and not the entire state object ... what is state object here: {currentUser: null} ... here it has only one property but in a bigger app it will have many properties and we want to update only the currentUser property
            break;
    
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
            break;
    }
}

const INITIAL_STATE = {
    currentUser: null,
} //> this is the initial state of the reducer ... we will pass this as the second argument to the useReducer hook

export const UserProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(userReducer, INITIAL_STATE); //> here dispatch is a function that we will use to update the state ... we will pass the action object to this function and it will update the state based on the action type and payload ...... the state here is the INITIAL_STATE object that we passed as the second argument to the useReducer hook and it gets updated based on the action object that we pass to the dispatch function

    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE); //> as useReducer returns current state we can destructure the state object and get the currentUser property from it ... initially the currentUser property will be null and it will get updated based on the action object that we pass to the dispatch function
    // console.log(currentUser);
    // console.log(dispatch);

    // const setCurrentUser = (user) => {
    //     dispatch({
    //         type: User_ACTION_TYPES.SET_CURRENT_USER,
    //         payload: user
    //     })
    // }

    const setCurrentUser = (user) =>
    dispatch(createAction(User_ACTION_TYPES.SET_CURRENT_USER, user));

    const value = { currentUser, setCurrentUser }; 
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) createUserDocumentFromAuth(user);
            setCurrentUser(user);
        });
        return unsubscribe; 
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}