import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx'
import ShoppingIcon from '../../src/assests/shopping-bag.svg'
// import { useContext } from 'react'
// import { CartContext } from '../../src/contexts/cart.context'

import { useSelector, useDispatch } from 'react-redux';

import { selectCartCount, selectCartDropdownOpen } from '../../src/store/cart/cart.selector.js';
import { setCartDropdownOpen } from '../../src/store/cart/cart.action.js';

const CartIcon = () => {
    // const { cartDropdownOpen, setCartDropdownOpen, cartIconCount } = useContext(CartContext);

    const dispatch = useDispatch()

    const cartDropdownOpen = useSelector(selectCartDropdownOpen)
    const cartIconCount = useSelector(selectCartCount)


    //> Toggle function : agar cartDropdownOpen true hai toh false krdo and vice versa on click
    const toggleCartDropdownOpen = () => dispatch(setCartDropdownOpen(!cartDropdownOpen))

    return(
        <CartIconContainer onClick={toggleCartDropdownOpen}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <ItemCount>{cartIconCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;