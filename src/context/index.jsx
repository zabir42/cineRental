import React, { createContext, useContext } from "react";

const MovieContext = createContext();
const ThemeContext = createContext();

// Corrected MovieProvider
const MovieProvider = ({ children, value }) => {
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

// Corrected ThemeProvider
const ThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const useThemeContext = () => useContext(ThemeContext);
const useMovieContext = () => useContext(MovieContext);

export { MovieProvider, ThemeProvider, useMovieContext, useThemeContext };

