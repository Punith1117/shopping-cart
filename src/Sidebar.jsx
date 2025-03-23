import { NavLink } from "react-router-dom"

function Sidebar() {
    return (
        <section className="sidebar">
            <NavLink to={'home'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Home</NavLink>
            <NavLink to={'products'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Products</NavLink>
            <NavLink to={'cart'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Cart</NavLink>
        </section>
    )
}

export default Sidebar