import styled from "styled-components";

export const StyledDefault = styled.section`
    display: flex;
    flex-direction: column;
    .wrapper {
        height: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #35567a;
        gap: 1rem;
        .catching-line {
            font-size: 4rem;
            color: white;
        }
        .categories {
            display: flex;
            gap: 1rem;
            font-size: 2rem;
            span {
                color: white;
                background-color: #00000039;
                padding: 10px;
                border-radius: 1rem;
            }
        }
    }

    @media (max-width: 800px) {
        .wrapper {
            padding: 1rem;
            .catching-line {
                font-size: 1.5rem;
            }
            .categories {
                font-size: 1.5rem;
                justify-content: center;
                flex-wrap: wrap;
            }
        }
    }
`

export const StyledLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #afc3c9;
    height: 75%;
    a {
        color: white;
        text-shadow: 2px 2px 10px white;
        font-size: 2rem;
        background-color: #225261;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 5px 5px 10px white;
        &:hover {
            filter: brightness(1.2);
        }
    }

    @media (max-width: 700px) {
        padding-top: 5rem;
        padding-bottom: 5rem;
        a {
            font-size: 1.5rem;
        }
    }
`