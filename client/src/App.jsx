import React, { useContext } from "react";
import styled from "styled-components";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";

const Container = styled.div``;
const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          ></Route>
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          ></Route>
          <Route path="/products" element={<ProductList />}>
            <Route path=":category" element={<ProductList />} />
          </Route>
          <Route path="/search" element={<ProductList />}>
            <Route path=":key" element={<ProductList />} />
          </Route>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
