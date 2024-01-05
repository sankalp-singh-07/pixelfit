import {CheckoutItemContainer, ImageContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, RemoveButton} from './checkoutProducts.styles.jsx';

import { useContext } from 'react';

import { CartContext } from '../../src/contexts/cart.context';

const CheckoutProducts = ({cartItem}) => {
    const {name,quantity,price, imageUrl} = cartItem;

    const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const clearTheItem = () => clearItemFromCart(cartItem);
    const addTheItem = () => addItemToCart(cartItem);
    const removeTheItem = () => removeItemToCart(cartItem);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <NameContainer>{name}</NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={removeTheItem}>&#10094;</ArrowContainer>
                <ValueContainer>{quantity}</ValueContainer>
                <ArrowContainer onClick={addTheItem}>&#10095;</ArrowContainer>
            </QuantityContainer>
            <NameContainer>{price}</NameContainer>
            <RemoveButton onClick={clearTheItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutProducts;