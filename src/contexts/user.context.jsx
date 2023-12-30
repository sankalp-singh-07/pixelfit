import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
//> createContext() is a function that creates a new context object. It accepts an optional parameter which is the default value of the context object. Default value is used when there is no matching Provider above the component tree mtlb koi bhi component Provider ke andar nahi hai toh default value use hoga.
//? Default value = If a component tries to consume UserContext but isn't wrapped in a UserProvider, it will receive this default value 

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }; //> value here is an object with two properties: currentUser and setCurrentUser

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) createUserDocumentFromAuth(user); //> if user is not null then create a document for that user
            setCurrentUser(user);
            // console.log(user)
        });
        return unsubscribe; //> this is a cleanup function that will be called when the component unmounts mtlb jab component unmount hoga tab ye function call hoga usse pehle ye function call nahi hoga
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
//> UseContext.Provider is a component that provides the value to all the children components that are wrapped inside it. UserContext returns an object with two properties: currentUser and setCurrentUser. We are passing this object as a value to the Provider component. This means that all the children components of the Provider component will have access to the currentUser and setCurrentUser properties.