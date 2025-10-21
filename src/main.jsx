<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './Context/ThemeContext.jsx';

import './index.css'
import App from './App.jsx'
import {UserProvider } from './Context/UserContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  </StrictMode>,
)
>>>>>>> ee09641dbf65a344a9b78c951bf3ce5120f14abf
