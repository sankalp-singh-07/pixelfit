import { useContext } from 'react';
import { CartContext } from '../../src/contexts/cart.context';
import { CheckoutContext } from '../../src/contexts/checkout.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)
    const {setCheckoutItems} = useContext(CheckoutContext)
    useEffect(() => setCheckoutItems(cartItems), [cartItems])
    
    // console.log(cartItems);
    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item?.id} cartItem={item}/>)}
            </div>
            <Button><Link className='font-go-to-checkout' to='/checkout'>GO TO CHECKOUT</Link></Button>
        </div>
    )
}

export default CartDropdown;