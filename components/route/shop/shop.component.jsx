import { useContext } from 'react';
import { CategoriesContext } from '../../../src/contexts/categories.context';

import CategoryPreview from '../../cartegory-preview/category-preview.component'
import './shop.styles.scss';

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map((item) => {
                const products = categoriesMap[item];
                return <CategoryPreview key={item} title={item} products={products}/>
            })}
        </div>
    )
}

export default Shop;