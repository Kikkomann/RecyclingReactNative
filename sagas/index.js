import { all } from 'redux-saga/effects';
import { getAllUsers } from './appStart';
import { createUser } from './users/create';
import { getAllHubs } from './getHubsSaga';

export default function* rootSaga() {
    yield all([
        getAllUsers(),
        createUser(),
        getAllHubs()
    ]);
}
