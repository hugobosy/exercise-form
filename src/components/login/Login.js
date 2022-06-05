import React from "react";

export const Login = props => {
    const {user, showPass, submit} = props;
    return (
        <form onSubmit={submit}>
            <label>
                Email:
                <input type="text" value={user.email} onChange={props.change}/>
            </label>
            <label>
                Password:
                <input type={user.showPass ? 'text' : 'password'} value={user.password}
                       onChange={props.change}/>
            </label>
            <button type="submit">Login</button>
            <button type="button" onClick={showPass}>{user.showPass ? "Hidden password" : "Show password"}</button>
        </form>
    )
}