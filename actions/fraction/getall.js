import * as types from "../types";

export function getAllFractionsByUser(userId) {
    return {
        type: types.FRACTIONS_GETALL_REQUEST,
        userId
    };
}
