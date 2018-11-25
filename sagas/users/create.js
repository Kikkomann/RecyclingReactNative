import { takeLatest, call, put } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../../actions/types";

// worker saga: makes the api call when watcher saga sees the action
function* doCreateUser(arg1, arg2) {
    console.log("arg1: " + arg1);
    console.log("arg2: " + arg2);
    let fetchTriesCounter = 0;

    const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
    const key = yield call(reduxSagaFirebase.database.create, 'User', {
        firstName: false,
        lastName: 'Do this',
        hub: "",
      });
      // `key` is something like "-Kfn7EyLEoHax0YGoQr0"


    // try {
    //     const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
    //     const hubs = yield call(reduxSagaFirebase.database.read, "Hub/");
    //     let hubModels = Object.values(hubs).map(hub => ({
    //         id: hub.id,
    //         name: hub.Name
    //     }));
    //     // dispatch a success action to the store with the hubs
    //     yield put({ type: types.USERS_GETALL_SUCCESS, hubModels });
    // } catch (error) {
    //     // dispatch a failure action to the store with the error
    //     yield put({ type: types.USERS_GETALL_ERROR, error });
    // }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* createUser() {
    yield takeLatest(types.USERS_CREATE_REQUEST, doCreateUser);
}





  