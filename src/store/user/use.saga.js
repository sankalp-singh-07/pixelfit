import { takeLatest, put, call, all } from "redux-saga/effects";

import { User_ACTION_TYPES } from "./user.types";

import { signInSuccess, signInFailed, signUpSuccess, signOutSuccess } from "./user.action";

import { getCurrentUser, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword, createUserWithEmailAndPasswordInAuth, signOutAuthUser } from "../../utils/firebase/firebase.utils";



export function* getSnapshotFromUserAuth(userAuth, additionalDetails){
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails)
        console.log(userSnapshot);
        console.log(userSnapshot.data());
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser)
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInWithEmail({payload: {email, password}}) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
        yield call(getSnapshotFromUserAuth, user)
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield call(createUserWithEmailAndPasswordInAuth, email, password);
        yield put(signUpSuccess(user, {displayName}))
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signOut() {
    try {
        yield call(signOutAuthUser)
        yield put(signOutSuccess())
    } catch (error) {
        yield put(signInFailed(error))
    }
}

export function* signInAfterSignUp({payload: {user, additionalDetails}}) {
    yield call(getSnapshotFromUserAuth, user, additionalDetails)
}

export function* onGoogleSignInStart() {
    yield takeLatest(User_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
    yield takeLatest(User_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
    yield takeLatest(User_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
    yield takeLatest(User_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(User_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest(User_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
    yield all([call(onCheckUserSession), call(onGoogleSignInStart), call(onEmailSignInStart), call(onSignUpStart), call(onSignUpSuccess), call(onSignOutStart)])
}