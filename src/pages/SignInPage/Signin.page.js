import {SignInForm, SignUpForm} from "./components/index"

function SignInPage(){
    return (
        <section className="signin-form">
            <SignInForm/>
            <SignUpForm/>
        </section>  
    )
}

export {
    SignInPage
}