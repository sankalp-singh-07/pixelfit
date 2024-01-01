import { useContext } from 'react';
import { CartContext } from '../../src/contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    // console.log(cartItems);
    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item?.id} cartItem={item}/>)}
            </div>
            <Button><span className='font-go-to-checkout'>GO TO CHECKOUT</span></Button>
        </div>
    )
}

export default CartDropdown;