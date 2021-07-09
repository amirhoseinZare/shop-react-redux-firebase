import "./Header.scss"
import {HeaderLogo , NavItem, CartLogo} from "./components/index"

function Header(){
    return (
        <header className="header">
            <HeaderLogo />
            <div className="navigation">
                <nav className="navitem-list">
                    <NavItem linkUrl="" name="home"/>
                    <NavItem linkUrl="shop" name="shop"/>
                    <NavItem linkUrl="about" name="about"/>
                    <NavItem linkUrl="signIn" name="signIn"/>
                </nav>
                <CartLogo/>
            </div>
        </header>
    )
}

export {
    Header
}