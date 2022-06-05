import './App.css';
import {useState} from "react";

function App() {

    const [user, setUser] = useState( {
        email: '',
        password: '',
    })

    return (
        <div className="App">
            <form>
                <label>
                    Email:
                    <input type="text" value={user.email} onChange={e => setUser(user =>({
                        ...user,
                        email: e.target.value,
                    }))}/>
                </label>
                <label>
                    Password:
                    <input type="password" value={user.password} onChange={e => setUser(user => ({
                        ...user,
                        password: e.target.value,
                    }))}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default App;
