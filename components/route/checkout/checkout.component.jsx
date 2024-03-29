import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx'
// import { useContext } from 'react';
// import { CartContext } from '../../../src/contexts/cart.context';
import CheckoutProducts from '../../checkoutProducts/checkoutProducts.component';

import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../src/store/cart/cart.selector.js';

import PaymentForm from '../../payment-form/payment-form.component.jsx';


const Checkout = () => {
    // const { cartItems, cartTotal} = useContext(CartContext);

    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal)

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
            <PaymentForm />
        </CheckoutContainer>
    )
}

export default Checkout;