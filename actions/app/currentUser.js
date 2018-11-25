import * as types from "../types";

export function setCurrentUser(user) {
    return {
        type: types.SET_CURRENT_USER,
        user: user
    };
}
