import * as types from "../actions/types";

const INITIAL_STATE = {
    allFractions: [],
    fetching: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.FRACTIONS_GETALL_REQUEST: {
            return {
                ...state,
                fetching: true
            };
        }
        case types.FRACTIONS_GETALL_SUCCESS: {
            return {
                ...state,
                allFractions: action.fractionModels,
                fetching: false
            };
        }

        case types.FRACTIONS_GETALL_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.error.stack
            };
        }

        case types.FRACTIONS_CREATE_SUCCESS: {
            let {
                fractionId,
                weight,
                isClean,
                trashType,
                userId,
                date,
            } = action.createdFraction;
            let fractionsCopy = state.allFractions.slice();
            fractionsCopy.push({
                id: fractionId,
                weight,
                isClean,
                trashType,
                userId,
                date,
            });
            return { allFractions: fractionsCopy, fetching: null, error: null };
        }

        default: {
            return state;
        }
    }
};
