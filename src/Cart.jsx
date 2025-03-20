import { Link } from "react-router-dom";

function Cart({cart, removeFromCart}) {
    let  totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return(
        <section className="cart">
            {cart.map(product => (
                <div key={product.id} data-testid="cart-item">
                    <img src={product.imageUrl} alt="product-image" />
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <button onClick={() => removeFromCart(product.id, cart)}>Remove From Cart</button>
                </div>
            ))}
            <div className="total-price-wrapper">
                <p>Total Price:</p>
                <p>{totalPrice}</p>
            </div>
            <Link to='/pay'>Pay and Place Order</Link>
        </section>
    )
}

export default Cart