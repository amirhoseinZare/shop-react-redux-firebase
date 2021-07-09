import {Link} from "react-router-dom"
import "./NavItem.scss"

function NavItem({ linkUrl, name }){
    return (<Link className="nav-item" to={linkUrl}>{name}</Link>)
}

export {
    NavItem
}