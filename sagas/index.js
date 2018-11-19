import { all } from 'redux-saga/effects';
import { getAllHubs } from './appStart';

export default function* rootSaga() {
    yield all([getAllHubs()]);
}
