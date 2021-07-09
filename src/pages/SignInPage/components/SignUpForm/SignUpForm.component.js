import {InputForm, Button} from "../../../../components/index"
import {auth, createUserProfileDocument} from "../../../../utils/firebase.utils"
import {useState, useEffect} from "react"

function SignUpForm(){

    const [state, setState] =  useState({ password:'', email:'',})

    const handleSubmit = async event => {
        event.preventDefault()
        const { password, email } = state
        try {
            console.log(password, email)
            const {user} = await auth.createUserWithEmailAndPassword( email, password )            
            console.log(typeof user)
            await createUserProfileDocument(user)
            setState({  password:'', email:'' })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = ({target}) => {
        const {name, value} = target
        console.log(name, value)
        setState({...state, [name] : value })
    }

    const { password, email} = state
    return (
        <form onSubmit={handleSubmit} >
            <h3>Sign Up</h3>
            <h4 className="form-message">You don't have an account</h4>
            <InputForm value={email} label="email" type="text" name="email" handleChange={handleChange}/>
            <InputForm value={password} label="password" type="password" name="password" handleChange={handleChange}/>
            <Button className="signin-button" type="submit">sign up</Button>
        </form>)
}

export {
    SignUpForm
}