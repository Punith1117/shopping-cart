import { useOutletContext } from "react-router-dom"
import { StyledProducts, Loading } from "./styles/Products.style"

function Products() {
    let {products, isInCart, addToCart, removeFromCart} = useOutletContext()
    return (
        <StyledProducts>
            {(products == null) ? (
                <Loading>loading</Loading>
            ) : (
                    products.map(item => (
                        <div className="product" data-testid="product" key={item.id}>
                            <img src={item.image} alt="product-image" data-testid='product-image' />
                            <div>
                                <h1 className="title">{item.title}</h1>
                                <p className="description">{item.description}</p>
                                <h2 className="price">{item.price}</h2>
                                { isInCart(item.id) ? <button className="remove" onClick={() => removeFromCart(item.id)}>Remove From Cart</button> : <button className="add" onClick={() => addToCart(item)}>Add To Cart</button> }
                            </div>
                        </div>
                    ))
            )}
        </StyledProducts>
    )
}

export default Products