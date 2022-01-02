import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "../redux/reducers/twoInput";

const TwoInputDemo = () => {
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
                placeholder="First Name"
                onChange={(e) => updateInputValue({ firstName: e.target.value })}
                value={state.firstName}
            />
            <input
                style={{
                    border: '1px solid #ccc',
                    fontSize: '1em',
                    padding: '0.5em',
                    margin: '0.5em',
                }}
                type="text" 
                placeholder="Last Name" 
                onChange={(e) => updateInputValue({ lastName: e.target.value })}
                value={state.lastName}
                />
        </div>
    );
}

export default TwoInputDemo;