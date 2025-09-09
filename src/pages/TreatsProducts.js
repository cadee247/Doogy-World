import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Category.css";
import treatsImg from "../assets/treats.jpg";

function TreatProducts() {
  const [openCards, setOpenCards] = useState(new Set());
  const navigate = useNavigate();

  const treats = [
    {
      img: treatsImg,
      name: "Montego Bag's O'Wags Mighty Treats Crunchies",
      description:
        " Freshens Breath.\nCorn & Soya Free.",
    },
  ];

  const toggleCard = (idx) => {
    const key = "treat-" + idx;
    const newSet = new Set(openCards);
    if (newSet.has(key)) newSet.delete(key);
    else newSet.add(key);
    setOpenCards(newSet);
  };

  const renderProducts = (products) =>
    products.map((prod, idx) => (
      <div className="product-card-wrapper" key={"treat-" + idx}>
        <div className="product-card" onClick={() => toggleCard(idx)}>
          {/* ✅ Lazy loading added */}
          <img src={prod.img} alt={prod.name} loading="lazy" />
          <h4>{prod.name}</h4>
          <small className="tap-hint">Tap for details</small>
        </div>
        {openCards.has("treat-" + idx) && (
          <div className="product-description-card">
            <p>{prod.description}</p>
          </div>
        )}
      </div>
    ));

  return (
    <div className="category-page">
      {/* PAGE TITLE */}
      <section className="category-welcome">
        <h1>Yummy Treats 🦴</h1>
        <p>
          Specially crafted treats for your dogs and cats. Healthy, delicious,
          and perfect for training or pampering.
        </p>
      </section>

      {/* ✅ Back Button (below welcome, not inside navbar) */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>

      {/* PRODUCT GRID */}
      <section className="puppies-kittens">
        <h3>Treats</h3>
        <p>Give your pets the treats they deserve!</p>
        <div className="product-grid">{renderProducts(treats)}</div>
      </section>
    </div>
  );
}

export default TreatProducts;
