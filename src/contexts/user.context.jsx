import { createContext, useState } from 'react';


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});
//> createContext() is a function that creates a new context object. It accepts an optional parameter which is the default value of the context object. Default value is used when there is no matching Provider above the component tree mtlb koi bhi component Provider ke andar nahi hai toh default value use hoga.
//? Default value = If a component tries to consume UserContext but isn't wrapped in a UserProvider, it will receive this default value 

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}
//> UseContext.Provider is a component that provides the value to all the children components that are wrapped inside it. UserContext returns an object with two properties: currentUser and setCurrentUser. We are passing this object as a value to the Provider component. This means that all the children components of the Provider component will have access to the currentUser and setCurrentUser properties.