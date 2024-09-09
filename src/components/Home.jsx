import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../store";
import ProductCard from "./ProductCard";

const Home = () => {
  const dispatch = useDispatch();
  const { products, selectedCategory } = useSelector((state) => state.products);

  const handleFilter = (category) => {
    dispatch(filterByCategory(category));
  };

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Men's Clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => handleFilter("Jewelry")}>Jewelry</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
