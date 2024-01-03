import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../src/contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate(); //> useNavigate is a hook which is used to navigate to a particular route
    const goToCheckout = () => {
        navigate('/checkout'); //> navigate is a function which takes a route as an argument and navigates to that route
    }

    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item?.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckout}><span className='font-go-to-checkout'>GO TO CHECKOUT</span></Button>
        </div>
    )
}

export default CartDropdown;