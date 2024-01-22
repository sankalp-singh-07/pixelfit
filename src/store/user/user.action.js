import { createAction } from "../../utils/reducer/reducer.utils";
import { User_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => createAction(User_ACTION_TYPES.SET_CURRENT_USER, user);

export const checkUserSession = () => createAction(User_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () => createAction(User_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) => createAction(User_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signInSuccess = (user) => createAction(User_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const signInFailed = (error) => createAction(User_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) => createAction(User_ACTION_TYPES.SIGN_UP_START, {email, password, displayName});

export const signUpSuccess = (user, additionalDetails) => createAction(User_ACTION_TYPES.SIGN_UP_SUCCESS, {user, additionalDetails});

export const signUpFailed = (error) => createAction(User_ACTION_TYPES.SIGN_UP_FAILED, error); 