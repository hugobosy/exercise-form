import './App.css';
import {useState} from "react";
import {Box} from "./box/Box";
import {data} from "../data/data";
import {Login} from "./login/Login";
import {Register} from "./register/Register";

function App() {

    const [user, setUser] = useState({
        email: '',
        password: '',
        correct: null,
        showPass: false,
        showRegister: false,
    })

    const handleForm = e => {
        e.preventDefault();
        user.email === data.email && user.password === data.password ? setUser(user => ({
            ...user,
            correct: true
        })) : setUser(user => ({...user, correct: false}))
    }

    const showPassword = () => {
        const pass = user.showPass;
        setUser(user => ({
            ...user,
            showPass: !pass
        }));

    }

    const handleLoginRegister = (reg) => {
        setUser(user => ({
            ...user,
            showRegister: reg,
            correct: null,
        }))
    }

    const handleChange = (e) => {
        const type = e.target.type;

        if(type === 'text') {
            setUser(user => ({
                ...user,
                email: e.target.value,
                correct: null
            }))
        } else if(type === 'password') {
            setUser(user => ({
                ...user,
                password: e.target.value,
                correct: null
            }))
        }
    }

    return (
        <>

            <div className="App">
                <button onClick={() => handleLoginRegister(false)}>Logowanie</button>
                <button onClick={() => handleLoginRegister(true)}>Rejestracja</button>
                {user.showRegister ? <Register/> : <Login user={user} submit={handleForm} showPass={showPassword} change={handleChange}/>}
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
