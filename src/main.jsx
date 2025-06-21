import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import worker from "./mocks/index.js";
import "./index.css";
import App from "./App.jsx";
import { AuthContextProvider } from "./contexts/auth-context";

worker.start({ onUnhandledRequest: "bypass" }).then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <Router>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </Router>
    </StrictMode>
  );
});
