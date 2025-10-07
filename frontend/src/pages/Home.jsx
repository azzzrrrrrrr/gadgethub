import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import phone1 from "../assets/phones/phone1.jpg";
import laptop1 from "../assets/laptops/laptop1.jpg";
import tv1 from "../assets/tvs/tv1.jpg";
import speaker1 from "../assets/speakers/speaker1.jpg";

const categories = [
  { name: "Phones", image: phone1, path: "/phones" },
  { name: "Laptops", image: laptop1, path: "/laptops" },
  { name: "Televisions", image: tv1, path: "/tvs" },
  { name: "Speakers", image: speaker1, path: "/speakers" },
];

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <h2>Welcome to GadgetHub</h2>
          <p>Shop top electronics — phones, laptops, TVs & speakers — all in one place!</p>
        </div>
      </section>
      <section className="category-grid">
        {categories.map((item, index) => (
          <Link to={item.path} key={index} className="category-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        ))}
      </section>
      <footer className="footer">
        © 2025 GadgetHub | Your trusted tech partner
      </footer>
    </div>
  );
}

export default Home;
