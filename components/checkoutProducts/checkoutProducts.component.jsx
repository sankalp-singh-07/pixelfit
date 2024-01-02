import './checkoutProducts.styles.scss'
import { useContext } from 'react';
import {CheckoutContext} from '../../src/contexts/checkout.context'

const CheckoutProducts = ({items}) => {
    const {name,id,quantity,price, imageUrl} = items;
    const {decrement, increment, cross, total} = useContext(CheckoutContext);
    const decreaseQuantity = () => decrement(items)
    const increaseQuantity = () => increment(items)
    const crossQuantity = () => cross(items)
    // console.log(items);

    return(
        <div key={id}>
            <img src={imageUrl} alt={`${name}`}/>
            <h3>{name}</h3>
            <div>
            <button onClick={decreaseQuantity} key={id}>⬅</button>
                <h3>{quantity}</h3>
            <button onClick={increaseQuantity}>➡</button>
            </div>
            <h3>{price * quantity}</h3>
            <button onClick={crossQuantity} key={id}>X</button>
            <div>
                <span>{total}</span>
            </div>
        </div>
    )
}

export default CheckoutProducts;