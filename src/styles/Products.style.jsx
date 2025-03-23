import styled from "styled-components";

export const StyledProducts = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    gap: 10px;
    padding: 4rem;
    background-color: #93e6ff;

    .product {
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
            &:hover {
                background-color: #1f6b1f;
            }
        }
        .remove {
            background-color: #db5c5c;
            &:hover {
                background-color: #db5c5c;
            }
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
            }
        }
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