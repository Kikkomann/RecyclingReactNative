import { all } from 'redux-saga/effects';
import { getAllUsers } from './app/appStart';
import { createUser } from './users/create';
// import { getAllHubs } from './hubs/getAll';

export default function* rootSaga() {
    yield all([
        getAllUsers(),
        createUser(),
        // getAllHubs()
    ]);
}
