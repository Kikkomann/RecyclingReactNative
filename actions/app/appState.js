import * as types from "../types";

export function appStart() {
    return {
        type: types.APP_START_GET_HUBS_AND_USERS_REQUEST,
    };
}

export function logOut() {
    return {
        type: types.LOG_OUT,
    };
}