import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../redux/reducers/twoInput";

const OtherOne = () => {
    const dispatch = useDispatch();
    const updateInputValue = (input) => dispatch(updateInput(input));
    const state = useSelector(state => state.twoInputReducer);
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
                placeholder="Other One"
                onChange={(e) => updateInputValue({ otherText: e.target.value })}
                value={state.otherText}
            />
        </div>
    )
}
export default OtherOne;