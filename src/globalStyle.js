import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: calc(1vw  / 14.4);
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        color: #413F3F;
        font-size: 15rem;
        font-weight: 400;
    }

    h1 {
        font-size: 15rem;
        font-weight: 700;
    }

    h1, h2, h3 {
        margin: 0;
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

    a {
        color: inherit; 
        text-decoration: none;
    }
`;

export default GlobalStyle;
