import {CollectionCard} from "../../components/index"
import "./CollectionPreview.scss"

function CollectionPreview(){
    return (
        

            <section className="collection">

                <h2>Hats</h2>

                <div className="collections-container">
                    <CollectionCard imageUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png" price={18}  title="the big hat"/>
                    <CollectionCard imageUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png" price={18}  title="the big hat"/>
                    <CollectionCard imageUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png" price={18}  title="the big hat"/>
                    <CollectionCard imageUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png" price={18}  title="the big hat"/>                
                </div>

            </section>
        
    )
}

export {CollectionPreview}