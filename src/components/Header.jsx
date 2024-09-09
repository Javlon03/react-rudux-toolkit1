import React from "react";
import { FaCartPlus, FaUser, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showLogin } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="header">
      <h1>React Ecommerce</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => dispatch(showLogin())}>
          <FaSignInAlt /> Login
        </button>
        <button>
          <FaUser /> Register
        </button>
        <button>
          <FaCartPlus /> Cart ({cart.length})
        </button>
      </nav>
    </header>
  );
};

export default Header;
