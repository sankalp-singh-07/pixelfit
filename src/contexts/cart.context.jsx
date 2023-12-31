import {useState, createContext} from 'react';

export const CartContext = createContext({
    cartDropdownOpen: false,
    setCartDropdownOpen: () => {}
})

export const CartProvider = ({children}) => {
    const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
    const value = {cartDropdownOpen, setCartDropdownOpen}
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}