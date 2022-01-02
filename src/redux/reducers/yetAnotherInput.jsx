import * as actions from '../actions/yetAnotherInput';

export const updateInput = (input) => ({
    type: actions.ANOTHER_UPDATE_INPUT,
    payload: input,
});

export default function reducer(state = { textField: "" }, action) {
    switch (action.type) {
        case actions.ANOTHER_UPDATE_INPUT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}