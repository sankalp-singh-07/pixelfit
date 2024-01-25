// import { useContext } from 'react';
// import { CartContext } from '../../src/contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {ProductCardContainer, FooterContainer, NameContainer, PriceContainer} from './product-card.styles.jsx';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../src/store/cart/cart.reducer.js';
import { selectCartItems } from '../../src/store/cart/cart.selector.js';


const ProductCard = ( {product} ) => {
    const {name, price, imageUrl} = product;
    // const { addItemToCart} = useContext(CartContext)

    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()

    const addProductToCart = () => dispatch(addItemToCart(product))

    //>Before RTK
    // const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </FooterContainer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )

}

export default ProductCard;