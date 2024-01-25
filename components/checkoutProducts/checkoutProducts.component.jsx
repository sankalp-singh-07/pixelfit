import {CheckoutItemContainer, ImageContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, RemoveButton} from './checkoutProducts.styles.jsx';

// import { useContext } from 'react';

// import { CartContext } from '../../src/contexts/cart.context';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../src/store/cart/cart.selector.js';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../src/store/cart/cart.reducer.js';

const CheckoutProducts = ({cartItem}) => {
    const {name,quantity,price, imageUrl} = cartItem;

    // const {clearItemFromCart, addItemToCart, removeItemToCart} = useContext(CartContext);

    const dispatch = useDispatch();

    const clearTheItem = () => dispatch(clearItemFromCart(cartItem));
    const addTheItem = () => dispatch(addItemToCart(cartItem));
    const removeTheItem = () => dispatch(removeItemFromCart(cartItem));

//> Before RTK
    // const cartItems = useSelector(selectCartItems)

    // const clearTheItem = () => dispatch(clearItemFromCart(cartItems, cartItem));
    // const addTheItem = () => dispatch(addItemToCart(cartItems, cartItem));
    // const removeTheItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

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