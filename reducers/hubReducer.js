import * as types from "../actions/types";

const INITIAL_STATE = {
    allHubs: [],
    fetching: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.HUBS_GETALL_REQUEST: {
            return {
                ...state,
                fetching: true,
            };
        }
        case types.HUBS_GETALL_SUCCESS: {
            return {
                allHubs: action.hubModels,
                fetching: false,
                error: null
            };
        }

        case types.HUBS_GETALL_ERROR: {
            return {
                ...state,
                fetching: false,
                error: action.error.stack
            };
        }

        default: {
            return state;
        }
    }
};
