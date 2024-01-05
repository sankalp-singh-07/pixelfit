import {useState, createContext, useEffect, useReducer} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
    //> why we always return a new object : bcoz we want to re-render the component and for that we need to return a new object ... react does not re-render the component if we return the same object
}

export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemFromCart: () => {},
    cartIconCount: 0,
    cartTotal: 0,
    setCartIconCount: () => {}
})

export const CART_ACTION_TYPES = {
    IS_CART_OPEN: 'IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.IS_CART_OPEN :
            return {
                ...state,
                cartDropdownOpen: payload
            }
            break;

        case 'SET_CART_ITEMS' :
            return{
                ...state,
                ...payload
            }
            break;

        default:
            console.log("Error");
    }
}

export const INITIAL_STATE = {
    cartDropdownOpen: false,
    cartItems: [],
    cartIconCount: 0,
    cartTotal: 0,
}

export const CartProvider = ({children}) => {

    const [{cartDropdownOpen, cartItems, cartIconCount, cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setCartDropdownOpen = (cartState) => {
        dispatch({
            type : CART_ACTION_TYPES.IS_CART_OPEN,
            payload : cartState
        })
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0)

        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity , 0)

        dispatch({type: 'SET_CART_ITEMS', payload:{cartItems: newCartItems, cartIconCount: newCartCount, cartTotal: newCartTotal}})
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = (addCartItem(cartItems, productToAdd));
        updateCartItemsReducer(newCartItems)
    }
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = (removeCartItem(cartItems, cartItemToRemove));
        updateCartItemsReducer(newCartItems)
    }

    const clearItemFromCart = (cartItemToClear) => {
        const newCartItems = (cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id));
        updateCartItemsReducer(newCartItems)
    }

    const value = {cartDropdownOpen, setCartDropdownOpen, addItemToCart, cartItems, cartIconCount, removeItemToCart, clearItemFromCart, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}