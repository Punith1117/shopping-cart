import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <section className="sidebar">
            <NavLink to={'home'} activeClassName="active-tab">Home</NavLink>
            <NavLink to={'products'} activeClassName="active-tab">Products</NavLink>
            <NavLink to={'cart'} activeClassName="active-tab">Cart</NavLink>
        </section>
    )
}

export default Sidebar