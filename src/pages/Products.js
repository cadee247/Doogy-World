import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../styles/Products.css";
import dogImg from "../assets/dogcover.jpg";       
import catImg from "../assets/catcover.jpg"; 
import treatImg from "../assets/treatcover.jpg"; 

function Products() {
  const navigate = useNavigate();

  const categories = [
    { name: "Dog Food", img: dogImg, path: "/products/dogs" },
    { name: "Cat Food", img: catImg, path: "/products/cats" },
    { name: "Treats", img: treatImg, path: "/products/treats" },
  ];

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <p>Choose a category to explore our range!</p>

      <div className="category-cards">
        {categories.map((cat, idx) => (
          <LazyCategoryCard
            key={cat.name}
            img={cat.img}
            name={cat.name}
            path={cat.path}
            navigate={navigate}
            delay={idx * 0.2} // staggered animation
          />
        ))}
      </div>
    </div>
  );
}

/* ✅ Lazy-loaded category card */
function LazyCategoryCard({ img, name, path, navigate, delay }) {
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
    <div
      ref={ref}
      className={`category-card ${visible ? "visible" : "hidden"}`}
      style={{ transitionDelay: `${delay}s` }}
      onClick={() => navigate(path)}
    >
      {/* ✅ lazy-load image */}
      <img src={img} alt={name} loading="lazy" />
      <h3>{name}</h3>
    </div>
  );
}

export default Products;
