import * as types from "../actions/types";

const INITIAL_STATE = {
    hubs: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.APP_START_HUBS_GETALL_REQUEST: {
            return {
                ...state,
                fetching: true,
                error: null
            };
        }
        case types.APP_START_HUBS_GETALL_SUCCESS: {
            return {
                hubs: action.hubModels,
                fetching: false
            };
        }

        case types.APP_START_HUBS_GETALL_ERROR: {
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
