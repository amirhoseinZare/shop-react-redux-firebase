import './CartLogo.scss'

function CartLogo(){
    return (
        <div className="cart-logo">
            <img src="https://img-premium.flaticon.com/png/512/3002/premium/3002254.png?token=exp=1623784389~hmac=309218c075909b2dcd15f2761e49facb" width="35px" height="35px"/>
            <div className="cart-items--number">0</div>
        </div>
    )
}

export {
    CartLogo
}