import { createSlice } from "@reduxjs/toolkit";
import { addCartItem, removeCartItem, clearCartItem } from "./cart.action";

export const CART_INITIAL_STATE = {
    cartDropdownOpen: false,
    cartItems: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CART_INITIAL_STATE,
    reducers: ({
        setCartDropdownOpen(state, action) {
            state.cartDropdownOpen = action.payload
        },
        addItemToCart(state, action){
            state.cartItems = addCartItem(state.cartItems, action.payload)
        },
        removeItemFromCart(state, action){
            state.cartItems = removeCartItem(state.cartItems, action.payload)
        },
        clearItemFromCart(state, action){
            state.cartItems = clearCartItem(state.cartItems, action.payload)
        },
    })    
})


export const {setCartDropdownOpen, addItemToCart, removeItemFromCart, clearItemFromCart} = cartSlice.actions

export const cartReducer = cartSlice.reducer


//! Before RTK
/*
import { CART_ACTION_TYPES } from './cart.types'

export const CART_INITIAL_STATE = {
    cartDropdownOpen: false,
    cartItems: [],
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.IS_CART_OPEN :
            return {
                ...state,
                cartDropdownOpen: payload
            }
            break;

        case CART_ACTION_TYPES.SET_CART_ITEMS :
            return{
                ...state,
                cartItems: payload
            }
            break;

        default:
            return state;
    }
}
*/