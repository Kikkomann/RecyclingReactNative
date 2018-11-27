import { takeLatest, call, put } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../../actions/types";

import { ToastAndroid } from "react-native";

// worker saga: makes the api call when watcher saga sees the action
function* doCreateFraction(action) {
    let fetchTriesCounter = 0;
    let { weight, isClean, trashType, userId, date } = action.payload;
    const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
    try {
        const fractionId = yield call(
            reduxSagaFirebase.database.create,
            "Fraction",
            {
                weight,
                isClean,
                type: trashType,
                userId,
                date,
            }
        );
        let createdFraction = {
            fractionId,
            weight,
            isClean,
            trashType,
            userId,
            date
        };
        yield put({ type: types.FRACTIONS_CREATE_SUCCESS, createdFraction });
        ToastAndroid.showWithGravity(
            "Tak for indleveringen!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
        );
    } catch (error) {
        yield put({ type: types.FRACTIONS_CREATE_ERROR, error });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* createFraction() {
    yield takeLatest(types.FRACTIONS_CREATE_REQUEST, doCreateFraction);
}
