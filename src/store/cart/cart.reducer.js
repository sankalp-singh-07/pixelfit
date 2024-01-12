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
