import {Component} from "react"
import {InputForm, Button} from "../../../../components/index"
import './SignInForm.scss'
import {signInWithGoogle} from "../../../../utils/firebase.utils"
import {useState, useEffect} from "react"

function SignInForm(props) {
    const [state,setState] = useState({ password:'', username:'',})

    const handleChange = ({target}) => {
        const {name, value} = target
        setState({ [name] : value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        setState({  password:'', username:'', })
    }

    return (
            <form onSubmit={handleSubmit} >
                <h3>Sign In</h3>
                <h4 className="form-message">You have already an account</h4>
                <InputForm label="username" type="text" name="username" handleChange={handleChange}/>
                <InputForm label="password" type="password" name="password" handleChange={handleChange}/>
                <Button className="signin-button" type="submit">sign in</Button>
                <Button className="signin-oauth-button" type="click" onClick={signInWithGoogle}>sign in with google</Button>
            </form> 
    )
}

export {
    SignInForm
}