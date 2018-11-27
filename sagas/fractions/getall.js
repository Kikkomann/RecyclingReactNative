import { takeLatest, call, put, select } from "redux-saga/effects";
import firebase from "react-native-firebase";
import ReduxSagaFirebase from "redux-saga-firebase";
import * as types from "../../actions/types";

import * as selectors from "../../selectors/appState";

// worker saga: makes the api call when watcher saga sees the action
function* doGetAllFractionsByUser() {
    let fetchTriesCounter = 0;
    try {
        const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
        let currentUser = yield select(selectors.currentUser);
        const fractions = yield call(
            reduxSagaFirebase.database.read,
            firebase
                .database()
                .ref("Fraction")
                .orderByChild("userId")
                .equalTo(currentUser.id)
        );
        let fractionModels = [];
        for (let [key, value] of Object.entries(fractions || {})) {
            fractionModels.push({
                id: key,
                weight: value.weight,
                isClean: value.isClean,
                type: value.type,
                userId: value.userId
            });
        }
        // dispatch a success action to the store with the fractions
        yield put({ type: types.FRACTIONS_GETALL_SUCCESS, fractionModels });

        //TODO: Kan jeg bruge dette, hvis jeg ikke behøver id?
        // const fractions = yield call(reduxSagaFirebase.database.read, "Fraction/");
        // let fractionsModels = Object.values(fractions).map(fractions => ({
        //     id: fractions.id,
        //     name: fractions.Name
        // }));
        // // dispatch a success action to the store with the fractions
        // yield put({ type: types.FRACTIONS_GETALL_SUCCESS, fractionsModels });
    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: types.FRACTIONS_GETALL_ERROR, error });
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* getAllFractions() {
    yield takeLatest(types.FRACTIONS_GETALL_REQUEST, doGetAllFractionsByUser);
}
