import './cart-icon.styles.scss'
import ShoppingIcon from '../../src/assests/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../src/contexts/cart.context'

const CartIcon = () => {
    const { cartDropdownOpen, setCartDropdownOpen } = useContext(CartContext);

    //> Toggle function : agar cartDropdownOpen true hai toh false krdo and vice versa on click
    const toggleCartDropdownOpen = () => setCartDropdownOpen(!cartDropdownOpen)

    return(
        <div className="cart-icon-container" onClick={toggleCartDropdownOpen}>
            <img src={ShoppingIcon} className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;