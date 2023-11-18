import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: #413F3F;
        font-size: 15px;
        font-weight: 400;
    }

    h1 {
        font-size: 15px;
        font-weight: 700;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
    }
`;

export default GlobalStyle;
