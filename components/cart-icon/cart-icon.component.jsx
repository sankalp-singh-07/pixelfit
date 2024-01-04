import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx'
import ShoppingIcon from '../../src/assests/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../src/contexts/cart.context'

const CartIcon = () => {
    const { cartDropdownOpen, setCartDropdownOpen, cartIconCount } = useContext(CartContext);

    //> Toggle function : agar cartDropdownOpen true hai toh false krdo and vice versa on click
    const toggleCartDropdownOpen = () => setCartDropdownOpen(!cartDropdownOpen)

    return(
        <CartIconContainer onClick={toggleCartDropdownOpen}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <ItemCount>{cartIconCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;