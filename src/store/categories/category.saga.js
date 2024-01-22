import { takeLatest, put, all, call } from 'redux-saga/effects';
//> takeLatest : listens for specified action type ... If it sees that action being dispatched multiple times, it only run the latest one and cancel the previous ones
//> put : is used to dispatch an action... similar to dispatch in redux-thunk or redux
//> all : is used to run multiple sagas simultaneously
//> call : is used to call an async function ... similar to async await

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';


//> fetchCategoriesStartAsync is used to fetch the categories from the firestore database and then dispatch the success or failed action based on the result
export function* fetchCategoriesStartAsync() {
    try {
        const categoryArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoryArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

//> this function waits for the action type to be dispatched and then calls the fetchCategoriesStartAsync function
export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesStartAsync)
}



//> this categoriesSaga function is used to run all the sagas simultaneously ...
export function* categorySaga() {
    yield all([
        call(onFetchCategories)
    ])
}