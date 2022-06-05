import {Form} from "./Form";

export const Register = props => {

    return (
        <Form newUser={props.newUser} change={props.change}/>
    )
}