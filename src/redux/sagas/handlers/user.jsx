import { call, put } from "redux-saga/effects";
import { getUserRequest } from "../requests/user";
import { getUserSuccess } from "../../reducers/user";

export function* handleGetUser(action) {
    try {
        const response = yield call(getUserRequest);
        const { data } = response;
        yield put(getUserSuccess(data));
    } catch (error) {
        console.log(error);
    }
}