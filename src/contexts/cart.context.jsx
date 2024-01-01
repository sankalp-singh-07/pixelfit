import {useState, createContext} from 'react';

const addCartItem = (cartItems, productToAdd) => {
    
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)


    if(existingCartItem){
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartIconCount: 0,
    setCartIconCount: () => {}
})

export const CartProvider = ({children}) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartIconCount, setCartIconCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {cartDropdownOpen, setCartDropdownOpen, addItemToCart, cartItems, cartIconCount, setCartIconCount }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}