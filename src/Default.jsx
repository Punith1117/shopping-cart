import { Link } from "react-router-dom"

function Default() {
    return (
        <section className="default">
            <div className="wrapper">
                <div className="catching-line">We have everything you need!</div>
                <div className="categories">
                    <span>electronics</span>
                    <span>jewelery</span>
                    <span>men's clothing</span>
                    <span>women's clothing</span>
                </div>
            </div>
            <Link to={'products'}>Shop Now</Link>
        </section>
    )
}

export default Default