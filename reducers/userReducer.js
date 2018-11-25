import * as types from "../actions/types";

const INITIAL_STATE = {
    allUsers: [],
    fetching: false,
    error: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.USERS_GETALL_REQUEST: {
            return {
                ...state,
                fetching: true
            };
        }
        case types.USERS_GETALL_SUCCESS: {
            return {
                ...state,
                allUsers: action.userModels,
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

        case types.USERS_CREATE_SUCCESS: {
            let { userId, firstName, lastName, hubId } = action.createdUser;
            let usersCopy = state.allUsers.slice();
            usersCopy.push({
                id: userId,
                firstName,
                lastName,
                hubId
            });
            return { allUsers: usersCopy, fetching: null, error: null };
        }

        default: {
            return state;
        }
    }
};
