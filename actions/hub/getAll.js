import * as types from "../types";

export function getAllHubs(hubs) {
    return {
        type: types.APP_START_HUBS_GETALL_REQUEST,
        hubs: hubs
    };
}
