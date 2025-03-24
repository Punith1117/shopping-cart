import styled from "styled-components";

export const StyledApp = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr;

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column
    }
`