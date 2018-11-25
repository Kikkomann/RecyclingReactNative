import { takeLatest, call, put } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../../actions/types";

// worker saga: makes the api call when watcher saga sees the action
function* doCreateUser(action) {
    let fetchTriesCounter = 0;
    let { firstName, lastName, hubId } = action.payload;
    const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
    try {
        const userId = yield call(reduxSagaFirebase.database.create, "User", {
            Name: {
                First: firstName,
                Last: lastName
            },
            hubId: hubId
        });
        let createdUser = {userId, firstName, lastName, hubId };
        yield put({ type: types.USERS_CREATE_SUCCESS, createdUser});
        yield put({ type: types.SET_CURRENT_USER, user: createdUser });
    } catch (error) {
        yield put({ type: types.USERS_GETALL_ERROR, error });
    }

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
