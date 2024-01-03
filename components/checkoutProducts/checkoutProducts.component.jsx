import './checkoutProducts.styles.scss';

import { useContext } from 'react';

import { CartContext } from '../../src/contexts/cart.context';

const CheckoutProducts = ({cartItem}) => {
    const {name,quantity,price, imageUrl} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearTheItem = () => clearItemFromCart(cartItem);
    const addTheItem = () => addItemToCart(cartItem);
    const removeTheItem = () => removeItemToCart(cartItem);

    return(
        <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt={`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={removeTheItem}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addTheItem}>&#10095;</div>
        <div></div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearTheItem}>&#10005;</div>
        </div>
    )
}

export default CheckoutProducts;