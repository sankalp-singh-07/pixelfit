import './cart-dropdown.styles.scss'
import Button from '../button/button.component';

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className="cart-items" />
            <Button><span className='font-go-to-checkout'>GO TO CHECKOUT</span></Button>
        </div>
    )
}

export default CartDropdown;