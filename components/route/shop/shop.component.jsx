import { useContext } from 'react';
import { ProductsContext } from '../../../src/contexts/products.context';

import ProductCard from '../../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    return (
        <div className='products-container'>
        {products.map(el =><ProductCard key={el.id} product={el}/>)}
        </div>
    )
}

export default Shop;