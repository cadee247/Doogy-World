import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Category.css";

import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";
import product6 from "../assets/product6.jpg";
import product7 from "../assets/product7.jpg";
import product8 from "../assets/product8.jpg";
import product9 from "../assets/product9.jpg";
import product10 from "../assets/product10.jpg";
import product11 from "../assets/product11.jpg";
import product12 from "../assets/product12.jpg";
import product13 from "../assets/product13.jpg";
import product14 from "../assets/product14.jpg";
import product15 from "../assets/product15.jpg";

function DogProducts() {
  const [openCards, setOpenCards] = useState(new Set());
  const navigate = useNavigate();

  const puppyProducts = [
    { img: product1, name: "WUMA! Complete & Balanced Puppy Food", description: "Strong bones & teeth\nHealthy growth & immunity" },
    { img: product4, name: "Montego Classic Puppy – Premium Multiprotein", description: "Immune Support\nGrowth & Conditioning" },
    { img: product9, name: "Montego Classic Puppy – Premium Multiprotein", description: "Joint Support\nImmune Boost" },
    { img: product11, name: "JOCK Junior – Exceptional Nutrition for Growing Dogs", description: "Omega 3 & 6\nGlucosamine & Chondroitin" },
    { img: product14, name: "Optimizor Complete 22%", description: "Skin & Coat Shine\nImmune Support with Vitacare" },
    { img: product15, name: "Optimizor Premium 26% 2-in-1 ", description: "Strong Growth & Muscle Support\nStrong bones & immune system" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const adultProducts = [
    { img: product2, name: "Optimizor Premium Adult – Chicken & Rice", description: "Muscle Support: High-quality poultry protein for strength and vitality\nDigestive Health: Rice-based formula with prebiotics for easy digestion" },
    { img: product3, name: "Montego Classic Adult Maintenance Diet", description: "Natural prebiotics: Supports digestion and gut health\nTaurine, glucosamine & chondroitin: For heart, joint, and vision support" },
    { img: product5, name: "Montego Karoo", description: "Single grain: Uses only rice for digestible, slow-release energy\nPrebiotics & minerals: Supports gut health, hydration, and overall vitality" },
    { img: product6, name: "Bow Wow", description: "Balanced nutrition for adult dogs\nFortified with vitamins and antioxidants to support immunity" },
    { img: product7, name: "Select", description: "Balanced nutrition: Protein, fibre, fat, and calcium for muscle tone, coat condition, and bone strength\nNo artificial colourants or flavourings\nVariants: Standard beef and flavourant-free “Select Advanced” for sensitive dogs" },
    { img: product8, name: "TipTop", description: "Omega 3 & 6: For joint care, coat shine, and vitamin absorption\nImmune Boosters: Includes Vitamin C, E, and Organic Selenium" },
    { img: product10, name: "Montego WUMA!", description: "Omega-6 fatty acids: Promote a shiny coat and healthy skin\nCalcium-enriched: Supports strong teeth and bones" },
    { img: product12, name: "JOCK", description: "High-quality protein: Supports muscle development and energy\nOmega-3 & 6 fatty acids: Promote healthy skin and a shiny coat" },
    { img: product13, name: "Bobtail", description: "VITARITE® formula: Includes 23 essential vitamins and minerals\nSupports: Strong teeth, shiny coat, immune health, and energy" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  const toggleCard = (section, idx) => {
    const key = section + "-" + idx;
    const newSet = new Set(openCards);
    if (newSet.has(key)) newSet.delete(key);
    else newSet.add(key);
    setOpenCards(newSet);
  };

  const renderProducts = (products, section) =>
    products.map((prod, idx) => (
      <LazyFadeCard key={section + "-" + idx}>
        <div className="product-card-wrapper">
          <div className="product-card" onClick={() => toggleCard(section, idx)}>
            <img src={prod.img} alt={prod.name} loading="lazy" />
            <h4>{prod.name}</h4>
            <small className="tap-hint">Tap for details</small>
          </div>
          {openCards.has(section + "-" + idx) && (
            <div className="product-description-card">
              <p>{prod.description}</p>
            </div>
          )}
        </div>
      </LazyFadeCard>
    ));

  return (
    <div className="category-page">
      <h2>Dog Products</h2>

      {/* Back Button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <section className="puppies-kittens">
        <h3>Puppies Section</h3>
        <p>Special products and nutrition for puppies.</p>
        <div className="product-grid">{renderProducts(puppyProducts, "puppy")}</div>
      </section>

      <section className="puppies-kittens">
        <h3>Adult Dogs</h3>
        <p>All your dog's daily needs covered.</p>
        <div className="product-grid">{renderProducts(adultProducts, "adult")}</div>
      </section>
    </div>
  );
}

/* Fade-in lazy wrapper */
function LazyFadeCard({ children }) {
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

export default DogProducts;
