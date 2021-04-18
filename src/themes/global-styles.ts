import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {

    &::-webkit-scrollbar {
        width: 10px;
    }
 
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
 
    &::-webkit-scrollbar-thumb {
        background-color: lightgray;
        border-radius: 10px;
        outline: 1px solid slategrey;
    }
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.backgroundColor}
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}
`;

export default GlobalStyle;
