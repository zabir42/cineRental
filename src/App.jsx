import React, { useReducer, useState } from "react";
import Page from "./Page";
import { MovieProvider, ThemeProvider } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeProvider value={{ darkMode, setDarkMode }}>
      <MovieProvider value={{ state, dispatch }}>
        <Page />
      </MovieProvider>
    </ThemeProvider>
  );
}
