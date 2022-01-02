export const GET_USER_REQUEST = 'GET_USER_REQUEST';
const GET_USER_SUCCESS = 'GET_USER_SUCCESS';

export const getUserRequest = () => ({
    type: GET_USER_REQUEST,
});

export const getUserSuccess = (user) => ({
    type: GET_USER_SUCCESS,
    payload: user,
});

export default function reducer(state = {}, action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}