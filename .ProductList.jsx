
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plants = [
  {
    id: 1,
    name: "Snake Plant",
    price: 15,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 20,
    category: "Air Purifying Plants",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 4,
    name: "Lavender",
    price: 18,
    category: "Medicinal Plants",
    image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400"
  },
  {
    id: 5,
    name: "Monstera",
    price: 25,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400"
  },
  {
    id: 6,
    name: "Fiddle Leaf Fig",
    price: 30,
    category: "Decorative Plants",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400"
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(
    plants.map((plant) => plant.category)
  )];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-list">
      <h1>Our Beautiful Plants</h1>
      <p>Choose your favorite plants for your home.</p>

      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div className="plant-card" key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart(plant.id)}
                  >
                    {isInCart(plant.id)
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
