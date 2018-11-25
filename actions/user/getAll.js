import * as types from "../types";

export function getAllUsers() {
    return {
        type: types.USERS_GETALL_REQUEST
    };
}
