import { createContext, useContext } from "react";

/* Customize the context */
export const ThemeContext = createContext({
    theme: "light",
    darkTheme: () => { },
    lightTheme: () => { }
});

/* Storing custom context */
export const ThemeProvider = ThemeContext.Provider;

/* The context must be public and available to other(s} component(s)*/
export default function useTheme() {
    return useContext(ThemeContext);
}

