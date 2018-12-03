import * as types from "../actions/types";

const INITIAL_STATE = {
    currentUser: null,
    firstLoad: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER: {
            return {
                currentUser: action.user
            };
        }

        case types.SET_FIRST_LOAD: {
            return {
                firstLoad: action.firstLoad
            };
        }

        default: {
            return state;
        }
    }
};
