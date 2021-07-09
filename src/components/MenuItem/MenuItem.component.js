import {withRouter} from 'react-router-dom'
import "./MenuItem.scss"

function menuItem ({ imageUrl, title, imageAlt, linkUrl, history, match }){
    return (
        <article className="menu-item" onClick={()=>history.push(`${match.url}${linkUrl}`)}>
            <img src={imageUrl} alt={imageAlt}/>
            <div className="menu-item--text">
                <h2 className="menu-item--text__header">{title.toUpperCase()}</h2>
                <span className="menu-item--text__description">SHOP NOW</span>
            </div>
        </article>
    )
}

const MenuItem = withRouter(menuItem)
export {
    MenuItem
}
