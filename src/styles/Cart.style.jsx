import styled from "styled-components";

export const StyledCart = styled.section`
    padding: 3rem;
    background-color: #b1dfb1;
    .products {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .total-price-wrapper {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1rem;
        background-color: #66be66;
    }
    a {
        display: flex;
        justify-content: center;
        background-color: #2e78e7;
        border-radius: 1rem;
        padding: 5px;
        margin: 1rem;
        margin-left: 6rem;
        margin-right: 6rem;
        font-size: 2rem;
        color: white;
        &:hover {
            filter: brightness(0.7);
        }
    }

    @media (max-width: 700px) {
        padding: 5px;
        a {
            margin-left: 1rem;
            margin-right: 1rem;
            font-size: 1.5rem;
        }
    }
`