import * as types from "../types";

export function appStart() {
    return {
        type: types.APP_START_GET_HUBS_AND_USERS_REQUEST,
    };
}

export function afterFirstLoad() {
    return {
        type: types.SET_FIRST_LOAD
    };
}