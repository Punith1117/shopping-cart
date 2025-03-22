function Products({products, isInCart, addToCart, removeFromCart}) {
    return (
        (products == null) ? (
            <p>loading</p>
        ) : (
            <>
            {
                products.map(item => (
                    <div className="product" data-testid="product" key={item.id}>
                        <img src={item.imageUrl} alt="product-image" data-testid='product-image' />
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        { isInCart(item.id) ? <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button> : <button onClick={() => addToCart(item)}>Add To Cart</button> }
                    </div>
                ))
            }
            </>
        )
    )
}

export default Products