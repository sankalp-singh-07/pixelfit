import { takeLatest, put, all, call } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { fetchCategoriesSuccess, fetchCategoriesFailed } from './category.action';

import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesStartAsync() {
    try {
        const categoryArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoryArray))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesStartAsync)
}

export function* categorySaga() {
    yield all([
        call(onFetchCategories)
    ])
}