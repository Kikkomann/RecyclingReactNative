import { takeLatest, call, put, select } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../../actions/types";
import * as selectors from "../../selectors/appStart";

// worker saga: makes the api call when watcher saga sees the action
function* doAppStart() {
    let fetchTriesCounter = 0;
    const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
    do {
        try {
            const users = yield call(reduxSagaFirebase.database.read, "User/");
            let userModels = [];
            for (let [key, value] of Object.entries(users)) {
                userModels.push({
                    id: key,
                    firstName: value.Name.First,
                    lastName: value.Name.Last,
                    hubId: value.hubId,
                });
            }
            // dispatch a success action to the store with the users
            yield put({ type: types.USERS_GETALL_SUCCESS, userModels });
        } catch (error) {
            debugger;
            // dispatch a failure action to the store with the error
            yield put({ type: types.USERS_GETALL_ERROR, error });
        }

        try {
            const hubs = yield call(reduxSagaFirebase.database.read, "Hub/");
            let hubModels = [];
            for (let [key, value] of Object.entries(hubs)) {
                hubModels.push({
                    id: key,
                    name: value.Name
                });
            }
            // dispatch a success action to the store with the hubs
            yield put({ type: types.HUBS_GETALL_SUCCESS, hubModels });
        } catch (error) {
            // dispatch a failure action to the store with the error
            yield put({ type: types.HUBS_GETALL_ERROR, error });
        }
    } while ((yield select(selectors.fetchingUsers)) && (yield select(selectors.fetchingHubs)) && fetchTriesCounter < 5);
    console.log("End of saga!");
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getAllUsers() {
    yield takeLatest(types.APP_START_GET_HUBS_AND_USERS_REQUEST, doAppStart);
}
