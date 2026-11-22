
import React, { useState } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Welcome to Paradise Nursery!
              Discover beautiful indoor plants
              to bring nature into your home.
            </p>

            <button onClick={() => setPage("plants")}>
              Get Started
            </button>
          </div>
        </div>
      ) : (
        <>
          <nav>
            <h2>Paradise Nursery</h2>

            <div>
              <a href="#" onClick={(e) => {
                e.preventDefault();
                setPage("home");
              }}>Home</a>

              <a href="#" onClick={(e) => {
                e.preventDefault();
                setPage("plants");
              }}>Plants</a>

              <a href="#" onClick={(e) => {
                e.preventDefault();
                setPage("cart");
              }}>Cart</a>
            </div>
          </nav>

          {page === "plants" && <ProductList />}

          {page === "cart" && (
            <CartItem
              onContinueShopping={() => setPage("plants")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
