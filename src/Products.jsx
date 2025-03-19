function Products({products}) {
    return (
        products.map(item => (
            <div className="product" data-testid="product" key={item.id}>
                <img src={item.imageUrl} alt="product-image" data-testid='product-image' />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
            </div>
        ))
    )
}

export default Products