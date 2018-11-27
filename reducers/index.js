import { combineReducers } from "redux";

import hubs from "./hubReducer";
import users from "./userReducer";
import fractions from "./fractionReducer";
import appState from "./appState";

export default combineReducers({
   appState,
   hubs,
   users,
   fractions,
});
