import styled from "styled-components";

export const StyledProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 10px;
    padding: 4rem;
    background-color: #93e6ff;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 1rem;
    }
`
export const Loading = styled.p`
    display: flex;
    background-color: coral;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
`