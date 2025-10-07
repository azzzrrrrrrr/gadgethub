import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import "./Category.css";
import phone1 from "../assets/phones/phone1.jpg";
import phone2 from "../assets/phones/phone2.jpg";
import phone3 from "../assets/phones/phone3.jpg";

const phones = [
  { name: "Galaxy S24", price: "₹79,999", image: phone1 },
  { name: "iPhone 15 Pro", price: "₹1,39,999", image: phone2 },
  { name: "OnePlus 12", price: "₹69,999", image: phone3 },
];

function Phone() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="category-page">
      <h2>Latest Smartphones</h2>
      <div className="product-grid">
        {phones.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phone;
