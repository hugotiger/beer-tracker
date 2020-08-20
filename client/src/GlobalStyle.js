import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Manrope", "Helvetica", "Arial", sans-serif;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: antialiased;
        font-smoothing: antialiased;
        font-size: 10px;
        --primary-color: #2576f7;
        --primary-bg: #e9edff;
        --palette-green: #31b57f;
        --palette-green-bg: #e6f4ed;
        --palette-green-border: #cae6d8;
        --shadow-green: rgba(49, 181, 127, 0.1);
        --palette-red: #f14942;
        --palette-red-bg: #fbe7e9;
        --palette-red-border: #efd5d8;
        --shadow-red: rgba(241,73, 66, 0.1);
    }

    body {
        background: white;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
        margin: 0;
        margin-top: 15px;
        margin-bottom: 64px;
    }

    .container {
        margin: 15px auto;
        width: 350px;
    }

    p {
        font-size: 1.6rem;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 600;
        margin: 0;
    }

    h1 {
        font-size: 3.2rem;
    }
    h2 {
        font-size: 1.8rem;
    }
    h3 {
        font-size: 1.2rem;
        margin-bottom: 7px;
        letter-spacing: 0.5px;
        color: rgba(0, 0, 0, 0.5);
    }
`;
