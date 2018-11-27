import { all } from 'redux-saga/effects';
import { getAllUsers } from './app/appStart';
import { createUser } from './users/create';
import { createFraction } from './fractions/create';
import { getAllFractions } from './fractions/getall';

export default function* rootSaga() {
    yield all([
        getAllUsers(),
        createUser(),
        createFraction(),
        getAllFractions(),
    ]);
}
