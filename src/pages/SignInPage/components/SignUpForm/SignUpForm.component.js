import {InputForm, Button} from "../../../../components/index"
import {signInWithGoogle} from "../../../../utils/firebase.utils"
import {useState, useEffect} from "react"

function SignUpForm(){

    const [state, setState] =  useState({ password:'', username:'',})

    const handleSubmit = event => {
        event.preventDefault()
        setState({  password:'', username:'', })
    }

    const handleChange = ({target}) => {
        const {name, value} = target
        setState({ [name] : value })
    }

    const { password, username} = state
    return (
        <form onSubmit={handleSubmit} >
            <h3>Sign Up</h3>
            <h4 className="form-message">You don't have an account</h4>
            <InputForm value={username} label="username" type="text" name="username" handleChange={handleChange}/>
            <InputForm value={password} label="password" type="password" name="password" handleChange={handleChange}/>
            <Button className="signin-button" type="submit" onClick={signInWithGoogle}>sign up</Button>
        </form>)
}

export {
    SignUpForm
}