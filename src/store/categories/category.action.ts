// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>

export type FetchCategoriesFailed = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>

export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailed

export const fetchCategoriesStart = () : FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)

export const fetchCategoriesSuccess = (categoriesArray : Category[]) : FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray)

export const fetchCategoriesFailed = (error : Error) : FetchCategoriesFailed => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error)


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