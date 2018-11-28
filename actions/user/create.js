import * as types from "../types";

export function createUser(firstName, lastName, hubId) {
    return {
        type: types.USERS_CREATE_REQUEST,
        payload: {
            firstName,
            lastName, 
            hubId
        }
    };
}
