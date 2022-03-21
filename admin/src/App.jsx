import React, { useContext } from "react";
import UserList from "./pages/UserList";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/authContext/AuthContext";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import NewUser from "./pages/NewUser";
const App = () => {
  const { root } = useContext(AuthContext);
  const isAdmin = root?.isAdmin;
  return (
    <Router>
      <Routes>
        {isAdmin ? (
          <>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product" element={<Product />} >
              <Route path=":productId"  element={<Product/>}/>
              </Route>
            <Route path="/users" element={<UserList />} />
            <Route path="/newproduct" element={<NewProduct />} />
            <Route path="/newuser" element={<NewUser />} />
            <Route path="/login" element={<Navigate to="/" />} />

          </>
        ) : (
          <>
            <Route path="/" exact element={<Login />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
