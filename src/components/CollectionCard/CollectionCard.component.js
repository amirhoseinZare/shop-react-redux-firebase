function CollectionCard({ imageUrl, title, price }){
    return (
        <article className="collection-card">
            <div className="collection-card--image">
                <img src ={imageUrl}/>
            </div>
            <footer className="collection-card--footer">
                <h3 className="collection-card--heading">{title}</h3>
                <p className="collection-card--price">${price}</p>
            </footer>
        </article>
    )
}

export {
    CollectionCard
}