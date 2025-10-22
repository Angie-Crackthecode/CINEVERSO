import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
import App from "./App.jsx";
import "./index.css";

// ✅ Render principal de la app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Proveedores globales */}
    <BrowserRouter basename="/">
      <UserProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);