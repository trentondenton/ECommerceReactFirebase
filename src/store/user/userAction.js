import { createAction } from "../../utils/reducer";
import { USER_ACTION_TYPES } from "../../contexts/userContexts";

export const setCurrentUser = user => {
  createAction({
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  });
};