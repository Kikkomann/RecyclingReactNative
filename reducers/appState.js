import * as types from "../actions/types";

const INITIAL_STATE = {
    currentUser: null,
    firstLoad: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.user
            };
        }

        case types.LOG_OUT: {
            return {
                currentUser: null,
                firstLoad: true
            };
        }

        case types.SET_FIRST_LOAD: {
            return {
                ...state,
                firstLoad: action.firstLoad
            };
        }

        default: {
            return state;
        }
    }
};
