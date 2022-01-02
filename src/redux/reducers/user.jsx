import * as actions from '../actions/user';

// to be dispatched from components
export const getUserRequest = () => ({
    type: actions.GET_USER_REQUEST,
});

// to be dispatched from worker saga
export const getUserSuccess = (user) => ({
    type: actions.GET_USER_SUCCESS,
    payload: user,
});

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.GET_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}