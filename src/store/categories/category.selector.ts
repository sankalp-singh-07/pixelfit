import { createSelector } from "reselect";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state) : CategoriesState => state.categories; //> state.categories is coming from the root-reducer.js file where we have defined the key as categories and value as categoryReducer which is a function that returns an object with categories as a key and value as an array of objects

export const selectCategories = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.categories)



export const selectCategoriesMap = createSelector([selectCategories], categories => categories.reduce((acc, categories) => {
		const { title, items } = categories;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {} as CategoryMap)
)
	
export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading)