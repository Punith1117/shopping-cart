import { StyledHome } from "./styles/Home.style"

function Home() {
    return(
        <StyledHome className="home">
            <h1 className="brand-name">Fake Store</h1>
            <div className="about-us">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati enim nam error quia asperiores beatae.</p>
            </div>
            <div className="contact">
                <h2>Contact</h2>
                <p className="phone">Phone: 999999999</p>
                <p className="email">Mail: afd;@gmail.com</p>
                <p className="location">Location: Lorem, Ipsum ababa, alaladi - 1231,23</p>
            </div>
        </StyledHome>

    )
}

export default Home