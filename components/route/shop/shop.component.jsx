import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../../src/contexts/categories.context';

import ProductCard from '../../product-card/product-card.component';
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map((item, key) => (
                <Fragment key={key}>
                    <h2>{item}</h2>
                    <div className='products-container'>
                    {categoriesMap[item].map(el =><ProductCard key={el.id} product={el}/>)}
                    </div>
                </Fragment>
            ))}
        </Fragment>
    )
}

export default Shop;