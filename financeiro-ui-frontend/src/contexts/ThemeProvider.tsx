import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeName } from "./ThemeContext";

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<ThemeName>(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeName | null;
        return savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        localStorage.setItem("darkMode", String(theme === "dark"));

        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
