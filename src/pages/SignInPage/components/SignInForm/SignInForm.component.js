import {Component} from "react"
import {InputForm, Button} from "../../../../components/index"
import './SignInForm.scss'
import {signInWithGoogle} from "../../../../utils/firebase.utils"

class SignInForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password:'',
            username:'',
        }
    }

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({ [name] : value })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState({  password:'', username:'', })
    }

    render() {
        console.log(this.state)
        return (
            <section className="signin-form">
                <form onSubmit={this.handleSubmit} >
                    <h3>Sign In</h3>
                    <h4 className="form-message">You have already an account</h4>
                    <InputForm label="username" type="text" name="username" handleChange={this.handleChange}/>
                    <InputForm label="password" type="password" name="password" handleChange={this.handleChange}/>
                    <Button className="signin-button" type="submit">sign in</Button>
                    <Button className="signin-oauth-button" type="click" onClick={signInWithGoogle}>sign in with google</Button>
                </form>


                <form onSubmit={this.handleSubmit} >
                    <h3>Sign Up</h3>
                    <h4 className="form-message">You don't have an account</h4>
                    <InputForm label="username" type="text" name="username" handleChange={this.handleChange}/>
                    <InputForm label="password" type="password" name="password" handleChange={this.handleChange}/>
                    <Button className="signin-button" type="submit" onClick={signInWithGoogle}>sign up</Button>
                </form>
            </section>  
        )
    }
}

export {
    SignInForm
}