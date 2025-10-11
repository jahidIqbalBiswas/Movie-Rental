import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialState } from "./reducers/CartReducer";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer position="bottom-right" />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}
