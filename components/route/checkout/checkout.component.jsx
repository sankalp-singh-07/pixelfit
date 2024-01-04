import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../../src/contexts/cart.context';
import CheckoutProducts from '../../checkoutProducts/checkoutProducts.component';

const Checkout = () => {
    const { cartItems, cartTotal} = useContext(CartContext);
    return (
        <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
            {cartItems.map(cartItem => <CheckoutProducts key={cartItem.id} cartItem={cartItem} />)}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;