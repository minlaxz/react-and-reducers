import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../redux/reducers/yetAnotherInput";

const AnotherInput = () => {
    const dispatch = useDispatch();
    const updateInputValue = (input) => dispatch(updateInput(input));
    const state = useSelector(state => state.anotherInputReducer);
    return (
        <div>
            <input
                style={{
                    border: '1px solid #ccc',
                    fontSize: '1em',
                    padding: '0.5em',
                    margin: '0.5em',
                }}
                type="text"
                placeholder="Another One"
            onChange={(e) => updateInputValue({ textField: e.target.value })}
            value={state.textField}
            />
        </div>
    )
}

export default AnotherInput;