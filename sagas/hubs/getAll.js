// import { takeLatest, call, put } from "redux-saga/effects";
// import firebase from "react-native-firebase";
// import ReduxSagaFirebase from "redux-saga-firebase";
// import * as types from "../../actions/types";

// // worker saga: makes the api call when watcher saga sees the action
// function* doGetAllHubs() {
//     let fetchTriesCounter = 0;
//     try {
//         const reduxSagaFirebase = new ReduxSagaFirebase(firebase.app());
//         const hubs = yield call(reduxSagaFirebase.database.read, "Hub/");
//         let hubModels = Object.values(hubs).map(hub => ({
//             id: hub.id,
//             name: hub.Name
//         }));
//         // dispatch a success action to the store with the hubs
//         yield put({ type: types.HUBS_GETALL_SUCCESS, hubModels });
//     } catch (error) {
//         // dispatch a failure action to the store with the error
//         yield put({ type: types.HUBS_GETALL_ERROR, error });
//     }
// }

// // watcher saga: watches for actions dispatched to the store, starts worker saga
// export function* getAllHubs() {
//     yield takeLatest(types.HUBS_GETALL_REQUEST, doGetAllHubs);
// }
