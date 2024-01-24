import { createContext, useContext } from "react";

const MovieContext = createContext();
const ThemeContext = createContext();

const useThemeContext = () => useContext(ThemeContext);
const useMovieContext = () => useContext(MovieContext);

export { MovieContext, ThemeContext, useMovieContext, useThemeContext };

