import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data/shop-data.js"


export const ProductsContext = createContext({
    products: [],
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []) //> commenting bcoz we have already added the data to firestore database
    
    useEffect(() => {
        const fetchProducts = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
        }
        fetchProducts();
    }, []) 
    //> VERY IMPORTANT : we never use async await in useEffect directly ... we always use it inside a function and then call that function inside useEffect ... this is bcoz useEffect is a synchronous function and async await is asynchronous ... so if we use async await directly inside useEffect then useEffect will not wait for the async await to finish and will move on to the next line of code ... so we use async await inside a function and then call that function inside useEffect ... this way useEffect will wait for the async await to finish and then move on to the next line of code

    const value = {products};
    
    return(
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}