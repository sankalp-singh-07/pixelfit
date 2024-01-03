import { useContext } from 'react';
import { CategoriesContext } from '../../../src/contexts/categories.context';

import ProductCard from '../../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='products-container'>
        {/* {products.map(el =><ProductCard key={el.id} product={el}/>)} */}
        </div>
    )
}

export default Shop;