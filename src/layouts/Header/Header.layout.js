import "./Header.scss"
import {HeaderLogo , NavItem, CartLogo} from "./components/index"
import {auth} from "../../utils/firebase.utils"

function Header(props){
    const {user:{currentUser:authUser}} = props
    return (
        <header className="header">
            <HeaderLogo />
            <div className="navigation">
                <nav className="navitem-list">
                    <NavItem linkUrl="" name="home"/>
                    <NavItem linkUrl="shop" name="shop"/>
                    <NavItem linkUrl="about" name="about"/>
                    { authUser ?  <div style={{marginRight:15, cursor:'pointer'}} onClick={()=>auth.signOut()}>signOut</div> : <NavItem linkUrl="signin" name="signin"/>}
                </nav>
                <CartLogo/>
            </div>
        </header>
    )
}

export {
    Header
}