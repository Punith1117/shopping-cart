import styled from "styled-components";

export const StyledHome = styled.section`
    background-color: blanchedalmond;

    * {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .brand-name {
        font-size: 6rem;
        background-color: blanchedalmond;
        margin: 2rem;
    }
    h2 {
        background-color: #ffbb56;
        font-size: 3rem;
        padding: 5px;
        border-radius: 1rem;
    }
    p {
        font-size: 2rem;
    }
    .contact, .about-us {
        margin: 2rem;
        background-color: #ffd28f;
        border-radius: 2rem;
        padding: 1rem;
    }

    @media (max-width: 700px) {
        .brand-name {
            font-size: 3rem;
        }
        h2 {
            font-size: 2rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
`