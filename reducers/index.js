import { combineReducers } from "redux";

import hubs from "./hubReducer";
import users from "./userReducer";

export default combineReducers({
   hubs: hubs,
   users: users
});
