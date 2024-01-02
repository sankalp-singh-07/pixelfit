import { createContext, useState } from "react";

export const CheckoutContext = createContext({
    checkoutItems: [],
    setCheckoutItems: () => {},
    decrement: () => {},
    increment: () => {},
    cross: () => {},
    total: 0,
})

const crossItems = (checkoutItems, product) => {
    const existingItemFinal = checkoutItems.filter(item => {
        if(item.id !== product.id) return item;
    })
    return existingItemFinal;
}

const decrementItems = (checkoutItems, product) =>{
    const existingItem = checkoutItems.map(item => {
        if(item.id === product.id) {
            return {...item, quantity: item.quantity - 1};
        }
        return item;
    })
    const existingItemFinal = existingItem.filter(item => {
        if(item.quantity > 0) return item;
    })
    return existingItemFinal;
}
const incrementItems = (checkoutItems, product) =>{
    const existingItem = checkoutItems.map(item => {
        if(item.id === product.id) {
            return {...item, quantity: item.quantity + 1};
        }
        return item;
    })
    return existingItem;
}

export const CheckoutProvider = ({children}) => {
    const [checkoutItems, setCheckoutItems] = useState([]);
    const decrement = (product) => {
        setCheckoutItems(decrementItems(checkoutItems, product));
    }
    const increment = (product) => {
        setCheckoutItems(incrementItems(checkoutItems, product));
    }
    const cross = (product) => {
        setCheckoutItems(crossItems(checkoutItems, product));
    }

    

    const total = checkoutItems.map((item) => {
        return [item.quantity * item.price]
    }).reduce((acc, current) => acc + Number(current), 0)

    const value = {checkoutItems, setCheckoutItems, decrement, increment, cross, total};
    return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
} 