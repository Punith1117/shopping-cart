import { Link } from "react-router-dom"
import { StyledDefault, StyledLink } from "./styles/Default.style"

function Default() {
    return (
        <StyledDefault className="default">
            <div className="wrapper">
                <div className="catching-line">We have everything you need!</div>
                <div className="categories">
                    <span>electronics</span>
                    <span>jewelery</span>
                    <span>men's clothing</span>
                    <span>women's clothing</span>
                </div>
            </div>
            <StyledLink>
                <Link to={'products'}>Shop Now</Link>
            </StyledLink>
        </StyledDefault>
    )
}

export default Default