import styled from "styled-components";

export const StyledProduct = styled.div`
    display: flex;
    padding: 5px;
    gap: 1rem;
    background-color: antiquewhite;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    img {
        height: 12rem;
    }
    .title {
        font-size: 1.5rem;
    }
    .description {
        font-size: 1rem;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
    .add {
        background-color: #279227;
    }
    .remove {
        background-color: #db5c5c;
    }
    button {
        font-size: 1rem;
        width: 50%;
        padding: 5px;
        border: 0;
        color: white;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            filter: brightness(0.7);
        }
    }
`