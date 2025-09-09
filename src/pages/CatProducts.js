import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Category.css";
import productCat from "../assets/product1cat.jpg";

function CatProducts() {
  const [openCards, setOpenCards] = useState(new Set());
  const navigate = useNavigate();

  const catProducts = [
    {
      img: productCat,
      name: "Monty & Me",
      description:
        "Supports a strong immune system with added antioxidants. Promotes a shiny coat and healthy skin with omega-6 fatty acids",
    },
  ];

  const toggleCard = (idx) => {
    const key = "cat-" + idx;
    const newSet = new Set(openCards);
    if (newSet.has(key)) newSet.delete(key);
    else newSet.add(key);
    setOpenCards(newSet);
  };

  const renderProducts = (products) =>
    products.map((prod, idx) => (
      <FadeIn key={"cat-" + idx}>
        <div className="product-card-wrapper">
          <div className="product-card" onClick={() => toggleCard(idx)}>
            <img src={prod.img} alt={prod.name} loading="lazy" />
            <h4>{prod.name}</h4>
            <small className="tap-hint">Tap for details</small>
          </div>
          {openCards.has("cat-" + idx) && (
            <div className="product-description-card">
              <p>{prod.description}</p>
            </div>
          )}
        </div>
      </FadeIn>
    ));

  return (
    <div className="category-page">
      {/* BACK BUTTON */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>

      {/* PAGE TITLE */}
      <section className="category-welcome">
        <h1>Cat Food 🐱</h1>
        <p>
          Specially formulated for your kittens and adult cats. We offer
          high-quality nutrition to keep your furry friends healthy, happy,
          and thriving.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="puppies-kittens">
        <h3>Cat Food</h3>
        <p>Delicious and nutritious options for kittens and adult cats.</p>
        <div className="product-grid">{renderProducts(catProducts)}</div>
      </section>
    </div>
  );
}

/* Fade-in animation wrapper */
function FadeIn({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={visible ? "fade-visible" : "fade-hidden"}>
      {children}
    </div>
  );
}

export default CatProducts;
