// import { useContext } from 'react';
// import { CategoriesContext } from '../../../src/contexts/categories.context';

import { useSelector } from 'react-redux'

import CategoryPreview from '../../cartegory-preview/category-preview.component'

const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext);
    const categoriesMap = useSelector(state => state.categories.categoriesMap)

    return (
        <>
            {Object.keys(categoriesMap).map((item) => {
                const products = categoriesMap[item];
                return <CategoryPreview key={item} title={item} products={products}/>
            })}
        </>
    )
}

export default CategoriesPreview;