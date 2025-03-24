import styled from "styled-components";

export const StyledErrorPage = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #263e5c;
    color: #ff3030;
    font-size: 2rem;
    height: 100vh;
    @keyframes shake {
        0% {
            transform: translateY(-1rem);
        }
        100% {
            transform: translateY(1rem);
        }
    }
    .error-message {
        animation-name: shake;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-direction: alternate;
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
    }

    @media (max-width: 700px) {
        padding: 1rem;
    }
`