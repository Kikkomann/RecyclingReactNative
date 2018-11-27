import * as types from "../types";

export function create(weight, isClean, trashType, userId, date) {
    return {
        type: types.FRACTIONS_CREATE_REQUEST,
        payload: {
            weight,
            isClean, 
            trashType,
            userId,
            date,
        }
    };
}
