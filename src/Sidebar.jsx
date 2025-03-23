import { NavLink } from "react-router-dom"
import { StyledSidebar } from "./styles/Sidebar.style"

function Sidebar() {
    return (
        <StyledSidebar>
            <NavLink to={'home'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Home</NavLink>
            <NavLink to={'products'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Products</NavLink>
            <NavLink to={'cart'} className={({ isActive }) => (isActive ? 'active-tab' : '')}>Cart</NavLink>
        </StyledSidebar>
    )
}

export default Sidebar