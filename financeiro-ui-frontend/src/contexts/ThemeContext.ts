import { createContext } from "react";

export type ThemeName = "light" | "dark"

export interface ThemeContextType {
    theme: ThemeName,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
