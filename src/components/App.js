import './App.css';
import {useState} from "react";
import {Box} from "./box/Box";
import {data} from "../data/data";
import {Login} from "./login/Login";
import {Register} from "./register/Register";

function App() {

    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPassword: '',
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
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
            correct: null,
            showPass: false,
        }))
    }

    const handleChange = (e) => {
        const type = e.target.name;

        if(type) {
            setUser(user => ({
                ...user,
                [type]: e.target.value,
                correct: null
            }))
        }
    }

    return (
        <>

            <div className="App">
                <button onClick={() => handleLoginRegister(false)}>Logowanie</button>
                <button onClick={() => handleLoginRegister(true)}>Rejestracja</button>
                {user.showRegister ? <Register change={handleChange} newUser={user}/> : <Login user={user} submit={handleForm} showPass={showPassword} change={handleChange}/>}
            </div>
            <div className="box">
                {user.correct === null ? null : user.correct ?
                    <Box message="Zalogowano poprawnie" classStyle="correct"/> :
                    <Box message="Nieprawid??owe dane logowania" classStyle="incorrect"/>}

            </div>

        </>
    );
}

export default App;
