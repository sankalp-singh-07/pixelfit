import {CategoryContainer, CategoryTitle} from './category.styles.jsx'
import { useParams } from 'react-router-dom' //> useParams is a hook that allows us to access the parameters of the current route
import { useContext, useEffect, useState } from 'react'
// import { CategoriesContext } from '../../../src/contexts/categories.context'

import { useSelector } from 'react-redux'
import { selectCategoriesMap, selectCategoriesIsLoading } from '../../../src/store/categories/category.selector.js'

import Spinner from '../../spinner/spinner.component.jsx'

import ProductCard from '../../product-card/product-card.component'

const Category = () => {
    const {category} = useParams(); //> useParams returns an object of key/value pairs of URL parameters
    // const { categoriesMap } = useContext(CategoriesContext);

    const categoriesMap = useSelector(selectCategoriesMap)

    const isLoading = useSelector(selectCategoriesIsLoading)
    
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>

        {
            isLoading ? (<Spinner />) : (<CategoryContainer>
            { //> why we use && here bcoz we want to check if products is not null or undefined, if it is then we don't want to map over it and avoid getting an error... we get error bcoz jab render hota hai toh initially products null hota hai kyuki categoriesMap null hota hai initially
                products && products.map((product) => <ProductCard key={product.id} product={product}/>)
            }
            </CategoryContainer>)
        }

        </>
    )
}

export default Category;