import { all, call } from 'redux-saga/effects';

import { categorySaga } from './categories/category.saga';
import { userSagas } from './user/use.saga';

export function* rootSaga() {
    yield all([
        call(categorySaga),
        call(userSagas)
    ])
}


//> function* is a generator function ... it is a special kind of function that can pause itself mid execution and can be resumed at any time later