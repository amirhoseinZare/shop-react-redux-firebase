function Button({ handleClick, children, ...otherProps }) {
    return (
        <button onClick={handleClick} {...otherProps} >{children}</button>
    )
}

export {
    Button
}