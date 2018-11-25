import { takeLatest, call, put } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../actions/types";

// worker saga: makes the api call when watcher saga sees the action
function* doGetAllUsers() {
    let fetchTriesCounter = 0;
    try {
        const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
        const users = yield call(reduxSagaFirebase.database.read, "User/");
        let userModels = Object.values(users).map(user => ({
            id: user.id,
            name: user.Name
        }));
        // dispatch a success action to the store with the users
        yield put({ type: types.APP_START_USERS_GETALL_SUCCESS, userModels });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.APP_START_USERS_GETALL_ERROR, error });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getAllUsers() {
    yield takeLatest(types.APP_START_USERS_GETALL_REQUEST, doGetAllUsers);
}
