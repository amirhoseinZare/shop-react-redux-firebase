import {CollectionPreview} from "../../components/index"
import {Header} from "../../layouts/index"
import {Fragment} from "react"

function ShopPage(){
    return (
        <Fragment>
            <main className="collections">
                <h1 className="collections-main--header">Collections</h1>
                <CollectionPreview/>
                <CollectionPreview/>
                <CollectionPreview/>
                <CollectionPreview/>
                <CollectionPreview/>
            </main>
            
        </Fragment>
    )
}

export {
    ShopPage
}