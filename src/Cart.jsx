import { Link, useOutletContext } from "react-router-dom";
import { StyledProduct } from "./styles/Product.style" 
import { StyledCart } from "./styles/Cart.style"
function Cart() {
    const {cart, removeFromCart} = useOutletContext()
    let  totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return(
        <StyledCart className="cart">
            <section className="products">
                {cart.map(product => (
                    <StyledProduct key={product.id} data-testid="cart-item">
                        <img src={product.image} alt="product-image" />
                        <div>
                            <h1 className="title">{product.title}</h1>
                            <p className="description">{product.description}</p>
                            <h2 className="price">{product.price}</h2>
                            <button onClick={() => removeFromCart(product.id)} className="remove">Remove From Cart</button>
                        </div>
                    </StyledProduct>
                ))}
            </section>
            <div className="total-price-wrapper">
                <h2>Total Price:</h2>
                <h2>{totalPrice}</h2>
            </div>
            <Link to='pay'>Pay and Place Order</Link>
        </StyledCart>
    )
}

export default Cart