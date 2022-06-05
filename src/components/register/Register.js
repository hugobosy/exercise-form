import React, {useState} from "react";

export const Register = props => {

    const [newUser, setNewUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        confirmPass: '',
    })



    return (
        <form>
            <h1>Register</h1>
            <p>
                <label>
                    <span>Name: </span>
                    <input type="text" value={newUser.name}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Surname: </span>
                    <input type="text" value={newUser.surname}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Email: </span>
                    <input type="text" value={newUser.email}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Password: </span>
                    <input type="text" value={newUser.password}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Confirm password: </span>
                    <input type="text" value={newUser.password}/>
                </label>
            </p>
            <button type="submit">Register</button>
        </form>
    )
}