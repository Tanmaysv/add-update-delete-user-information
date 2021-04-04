import React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import AppRouter from "./app-router";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    );
}

export default App;
