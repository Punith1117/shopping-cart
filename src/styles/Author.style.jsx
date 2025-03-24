import styled from "styled-components";

export const StyledAuthor = styled.h3`
    position: absolute;
    left: 1rem;
    top: 1rem;
    z-index: 1;
    padding: 5px;
    text-shadow: 2px 2px 3px blue;
    a {
        color: white;
        text-underline-offset: 5px;
        text-decoration: underline;
    }
    
    @media (max-width: 700px) {
        position: fixed;
        top: auto;
        bottom: 0;
        left: 35%;
        a {
            color: black;
        }
    }
`