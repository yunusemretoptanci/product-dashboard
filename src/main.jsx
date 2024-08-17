import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-8tgnph8vvmf0flob.us.auth0.com"
      clientId="fHieo21ECydtaxrKJHogoaR4R29MNdY2"
      authorizationParams={{
        redirect_uri: window.location.origin + "/register",
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
