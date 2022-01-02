import * as actions from '../actions/twoInput';

export const updateInput = (input) => ({
    type: actions.UPDATE_INPUT,
    payload: input,
});

export default function reducer(state = { firstName: "", lastName: "", otherText: "" }, action) {
    switch (action.type) {
        case actions.UPDATE_INPUT:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}