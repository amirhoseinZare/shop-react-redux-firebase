import './App.scss';
import { HomePage, HatsPage, NotFoundPage, ShopPage, AboutPage, SignInPage } from "./pages/index"
import { Route, Switch, Link } from "react-router-dom"
import { InputForm } from './components'; 
import { Header } from "./layouts/index"
import { auth } from "./utils/firebase.utils"
import {useState, useEffect} from "react"

function App() {

  const [userState, setUserState] = useState({ currentUser: null })
  useEffect(async ()=>{
    const unMount = auth.onAuthStateChanged(async user=>{
      await setUserState({currentUser:user})
      console.log(userState)
    })

    return unMount
  }, [])

  useEffect(()=>{
    console.log(userState)
  }, [userState])

  return (
      <div className="App">
        <Header user={userState}/>
        <Switch>
            <Route exact component={HomePage} path="/" />
            <Route exact component={HatsPage} path="/hats" />
            <Route exact component={ShopPage} path="/shop" />
            <Route exact component={AboutPage} path="/about" />
            <Route exact component={SignInPage} path="/signin" />
            <Route  component={NotFoundPage} />
        </Switch>
      </div>
  );
}

export default App;
