function Cart({cart}) {
    return(
        cart.map(product => (
            <div key={product.id} data-testid="cart-item">
                <img src={product.imageUrl} alt="product-image" />
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button>Remove From Cart</button>
            </div>
        ))
    )
}

export default Cart