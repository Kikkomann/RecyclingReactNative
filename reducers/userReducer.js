import * as types from "../actions/types";

const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.USERS_GETALL_REQUEST: {
            return {
                ...state,
                fetching: true,
                error: null
            };
        }
        case types.USERS_GETALL_SUCCESS: {
            return {
                users: action.userModels,
                fetching: false
            };
        }

        case types.USERS_GETALL_ERROR: {
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
