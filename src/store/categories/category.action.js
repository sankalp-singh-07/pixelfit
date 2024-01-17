import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)


//> the above 3 are just action creators which return an action object with a type property and a payload property and now we need to dispatch these actions to the store and for that we need to use redux-thunk middleware 

// export const fetchCategoriesAsync = () => {
//     return async (dispatch) => { //? redux thunk passes dispatch as an argument to this function automatically
//         dispatch(fetchCategoriesStart())

//         try {
//             const categoryArray = await getCategoriesAndDocuments();
//             dispatch(fetchCategoriesSuccess(categoryArray)) 
//         } catch (error) {
//             dispatch(fetchCategoriesFailed(error))
//         }
//     }
// }

//> replaced the above async thunk with redux-saga