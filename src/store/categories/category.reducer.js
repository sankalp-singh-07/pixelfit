import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
}

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: CATEGORIES_INITIAL_STATE,
    reducers: {
        setCategories(state, action) {
            state.categories = action.payload
        }
    }
})

export const {setCategories} = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer

//! Before RTK

/*
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {} ) => {
    const {type, payload} = action;

    switch(type){
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES :
            return {...state, categories: payload};
            break;
            
        default:
            return state;
    }
}

*/