import * as types from "../actions/types";

const INITIAL_STATE = {
    currentUser: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER: {
            return {
                currentUser: action.user
            };
        }

        default: {
            return state;
        }
    }
};
