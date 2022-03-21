import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductContextProvider } from "./context/productContext/ProductContext";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { UserContextProvider } from "./context/userContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
