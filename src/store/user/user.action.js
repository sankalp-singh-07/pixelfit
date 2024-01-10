import { createAction } from "../../utils/reducer/reducer.utils";
import { User_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => createAction(User_ACTION_TYPES.SET_CURRENT_USER, user);