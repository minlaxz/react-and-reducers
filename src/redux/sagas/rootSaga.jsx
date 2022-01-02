import {takeLatest } from 'redux-saga/effects';
import { GET_USER_REQUEST } from '../reducers/user';
import { handleGetUser } from './handlers/user';


// Watcher Saga: watches for actions dispatched to the store, starts worker saga
export default function* rootSaga() {
    // handleGetUser is fired when GET_USER_REQUEST is dispatched and it is a worker saga
    yield takeLatest(GET_USER_REQUEST, handleGetUser);
}