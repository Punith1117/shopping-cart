import styled from "styled-components";

export const StyledSidebar = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: #5C899D;
    padding: 5px;

    a {
        width: 100%;
        background-color: #F2DE9B;
        padding: 5px;
        color: black;
        border-radius: 5px;
    }

    .active-tab {
        background-color: #e9c345;
    }

    @media (max-width: 700px) {
        flex-direction: row;
        height: fit-content;
    }
`