import * as types from "../types";

export function getAllHubs(hubs) {
    return {
        type: types.HUBS_GETALL_REQUEST,
        hubs: hubs
    };
}
