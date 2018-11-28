import * as types from "../types";

export function getAllFractionsByUserId(userId) {
    return {
        type: types.FRACTIONS_GETALL_REQUEST,
        userId
    };
}
