import * as types from "../types";

export function create(user) {
    return {
        type: types.USERS_CREATE_REQUEST,
        user: user
    };
}
