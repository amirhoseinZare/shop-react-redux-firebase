import {Link} from "react-router-dom"

function NotFoundPage(){
    return (
        <div>
            <h1>404 not found</h1>
            <Link to="/">back to hame page</Link>
        </div>
    )
}

export {NotFoundPage}