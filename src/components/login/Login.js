import React from "react";

export const Login = props => {
    const {user, showPass, submit} = props;
    return (
        <form onSubmit={submit}>
            <h1>Logowanie</h1>
            <label>
                Email:
                <input type="text" name="email" value={user.email} onChange={props.change}/>
            </label>
            <label>
                Password:
                <input type={user.showPass ? 'text' : 'password'} name="password" value={user.password}
                       onChange={props.change}/>
            </label>
            <button type="submit">Login</button>
            <button type="button" onClick={showPass}>{user.showPass ? "Hidden password" : "Show password"}</button>
        </form>
    )
}