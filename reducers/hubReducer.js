import * as types from "../actions/types";

const INITIAL_STATE = {
   hubs: []
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case types.APP_START_HUBS_GETALL: {
         return {
            hubs: [action.hubs[0], action.hubs[1]]
         };
      }
      default: {
         return state;
      }
   }
};
