import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { GET_USER_REQUEST } from './redux/reducers/user';

const SubComponent = () => {
    const dispatch = useDispatch();
    const userRequest = () => dispatch({ type: GET_USER_REQUEST });
    const user = useSelector(state => state.userReducer);
    return (
        <div>
            <p style={{
                whiteSpace: 'pre-wrap',
                width: '100vw',
                height: '80%',
            }}>
                {
                    (user ? JSON.stringify(user) : 'Loading...')
                }
            </p>
            <button
                onClick={() => userRequest()}
            >Fetch Data</button>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h3>
                This should not be re-rendered when the state is updated.
            </h3>
            <SubComponent />
            
        </div>
    );
}

export default App;
