import React, { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";
import AppRouter from "./app-router";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes/theme";
import GlobalStyle from "./themes/global-styles";

function App() {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
    const onToggleButtonClick = () => setIsLightTheme(!isLightTheme);

    return (
        <Provider store={store}>
            <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
                <>
                    <GlobalStyle />
                    <AppRouter onToggleButtonClick={onToggleButtonClick} />
                </>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
