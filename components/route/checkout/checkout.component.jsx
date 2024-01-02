import './checkout.styles.scss'
import { useContext } from 'react';
import { CheckoutContext } from '../../../src/contexts/checkout.context';
import CheckoutProducts from '../../checkoutProducts/checkoutProducts.component'

const Checkout = () => {
    const { checkoutItems } = useContext(CheckoutContext);
    return (
        <div>
            {checkoutItems.map(items => <CheckoutProducts items={items} key={items.id}/>)}
        </div>
    )
}

export default Checkout;