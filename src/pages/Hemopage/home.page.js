import {MenuItemsContainer} from "./components/index"
import { withRouter } from "react-router-dom"
import {Timer} from "../index"
import {Header} from "../../layouts/index"

function homePage(history, match, path, ...otherProps){
    console.log(history, match, path)
    return (
        <div>
            <MenuItemsContainer/>
        </div>
    )
}


const HomePage = withRouter(homePage)
export  { HomePage }