import {takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/user'
import { handleGetUser } from './handlers/user';


// Watcher Saga: watches for actions dispatched to the store, starts worker saga
export default function* rootSaga() {
    // handleGetUser is fired when GET_USER_REQUEST is dispatched and it is a worker saga
    yield takeLatest(actions.GET_USER_REQUEST, handleGetUser);
}