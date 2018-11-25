import * as types from "../types";

export function getAllUsers(users) {
    return {
        type: types.APP_START_USERS_GETALL_REQUEST,
        users: users
    };
}
