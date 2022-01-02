import { call, put } from "redux-saga/effects";
import { actualGetUserRequest } from "../requests/user";
import { getUserSuccess } from "../../reducers/user";

export function* handleGetUser(action) {
    try {
        const response = yield call(actualGetUserRequest);
        const { data } = response;
        // dispatch a success action to the store
        yield put(getUserSuccess(data));
    } catch (error) {
        console.log(error);
    }
}