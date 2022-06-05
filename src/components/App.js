import './App.css';
import {useState} from "react";
import {Box} from "./box/Box";
import {data} from "../data/data";

function App() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        correct: null,
        showPass: false,
    })

    const handleForm = e => {
        e.preventDefault();
        user.email === data.email && user.password === data.password ? setUser(user => ({
            ...user,
            correct: true
        })) : setUser(user => ({...user, correct: false}))
    }

    // const showPassword = () => {
    //     setUser(user => ({
    //         ...user,
    //         showPass: true
    //     }))
    //
    //     setTimeout(setUser(user => ({
    //         ...user,
    //         showPass: false,
    //     })), 2000)
    // }

    return (
        <>
            <div className="App">
                <form onSubmit={handleForm}>
                    <label>
                        Email:
                        <input type="text" value={user.email} onChange={e => setUser(user => ({
                            ...user,
                            email: e.target.value,
                            correct: null,
                        }))}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={user.password} onChange={e => setUser(user => ({
                            ...user,
                            password: e.target.value,
                            correct: null,
                        }))}/>
                    </label>
                    <button type="submit">Login</button>
                    {/*<button onClick={showPassword}>Show password</button>*/}
                </form>
            </div>
            <div className="box">
                {user.correct === null ? null : user.correct ?
                    <Box message="Zalogowano poprawnie" classStyle="correct"/> :
                    <Box message="Nieprawidłowe dane logowania" classStyle="incorrect"/>}
            </div>

        </>
    );
}

export default App;
