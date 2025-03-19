function Products({products, cart, isInCart, addToCart, removeFromCart}) {
    return (
        products.map(item => (
            <div className="product" data-testid="product" key={item.id}>
                <img src={item.imageUrl} alt="product-image" data-testid='product-image' />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                { isInCart(item.id, cart) ? <button onClick={() => removeFromCart(item.id, cart)}>Remove From Cart</button> : <button onClick={() => addToCart(item.id, cart)}>Add To Cart</button> }
            </div>
        ))
    )
}

export default Products