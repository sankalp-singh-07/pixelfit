import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import { CategoryAction } from "./category.action";  //> using as keyword for this ... declaring that the action type can only be the 3 types described in the CategoryAction type otherwise throw error

export type CategoriesState = {
    readonly categories: Category[],
    readonly isLoading: boolean,
    readonly error: Error | null
}

export const CATEGORIES_INITIAL_STATE : CategoriesState = {
    categories: [],
    isLoading: false,
    error: null
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} as CategoryAction ) => {

    switch(action.type){
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START :
            return {...state, isLoading: true};
            break;
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS :
            return {...state, categories: action.payload, isLoading: false};
            break;
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED :
            return {...state, error: action.payload, isLoading: false};
            break;
            
        default:
            return state;
    }
}