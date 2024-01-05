import {CartItemContainer, ItemDetailsContainer, NameContainer, PriceContainer} from './cart-item.styles.jsx'

const CartItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem;
    return(
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{quantity} x ${price}</PriceContainer>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;