import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./components/Login.css";

const App = () => {
  const isLoginVisible = useSelector((state) => state.ui.isLoginVisible);

  return (
    <Router>
      {isLoginVisible ? (
        <Login />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
