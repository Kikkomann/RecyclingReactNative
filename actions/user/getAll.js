import * as types from "../types";

export function getAllUsers(users) {
    return {
        type: types.USERS_GETALL_REQUEST,
        users: users
    };
}
