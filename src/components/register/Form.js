import React from "react";

export const Form = props => {
    const user = props.newUser

    return (
        <form>
            <h1>Register</h1>
            <p>
                <label>
                    <span>Name: </span>
                    <input type="text" value={user.name} name="name" onChange={props.change} className={user.name.length > 3 ? 'correct' : 'incorrect'}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Surname: </span>
                    <input type="text" value={user.surname} name="surname" onChange={props.change} className={user.surname.length > 3 ? 'correct' : 'incorrect'}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Email: </span>
                    <input type="text" value={user.email} name="email" onChange={props.change} className={user.email.indexOf('@') !== -1 ? 'correct' : 'incorrect'}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Password: </span>
                    <input type="password" value={user.password} name="password" onChange={props.change} className={user.password.length >= 8 ? 'correct' : 'incorrect'}/>
                </label>
            </p>
            <p>
                <label>
                    <span>Confirm password: </span>
                    <input type="password" value={user.confirmPassword} name="confirmPassword" onChange={props.change} className={user.password === user.confirmPassword ? 'correct' : 'incorrect'}/>
                </label>
            </p>
            <button type="submit">Register</button>
        </form>
    )
}