import {useState, createContext, useEffect} from 'react';

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

export const CartProvider = ({children}) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartIconCount, setCartIconCount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price , 0)
        setcartTotal(newCartTotal);
    }, [cartItems]);


    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        setCartIconCount(cartIconCount + 1)
    }
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
        setCartIconCount(cartIconCount - 1)
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id));
    }

    const value = {cartDropdownOpen, setCartDropdownOpen, addItemToCart, cartItems, cartIconCount, setCartIconCount, removeItemToCart, clearItemFromCart, cartTotal}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}