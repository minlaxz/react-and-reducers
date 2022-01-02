import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUserRequest } from './redux/reducers/user';
import TwoInputDemo from './Components/TwoInputDemo';
import AnotherInput from './Components/yetAnotherInput';
import _ from 'lodash';
import OtherOne from './Components/OtherOne';

const SubComponent = () => {
    const dispatch = useDispatch();
    const userRequest = () => dispatch(getUserRequest());
    const user = useSelector(state => state.userReducer);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: "100%",
            }}
        >
            <p style={{
                whiteSpace: 'pre-wrap',
                width: "80%",
            }}>
                {
                    (_.isEmpty(user) ? 'No data yet...' : JSON.stringify(user, null, 2))
                }
            </p>
            <button
                style={{
                    border: '1px solid #ccc',
                    fontSize: '1em',
                    padding: '0.2em',
                    margin: '0.5em',
                    borderRadius: '5px',
                }}
                onClick={() => userRequest()}
            >Fetch Data</button>
            <span><small>NO <b>CLS</b> is considered</small></span>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h3>
                This should not be re-rendered when the any of the state is updated.
            </h3>
            <SubComponent />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "100%",
                }}
            >
                <TwoInputDemo />
                <AnotherInput />
                <OtherOne />
            </div>
        </div>
    );
}

export default App;
