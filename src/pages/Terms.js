import { useEffect, useRef, useState } from "react";
import "../styles/Terms.css";

function Terms() {
  const termsList = [
    "All content on this website is for informational purposes only.",
    "Products shown online are for display and reference; actual purchases must be made in-store.",
    "Product availability may vary and is subject to stock at our physical stores.",
    "Prices may change without prior notice.",
    "No credit is given."
  ];

  return (
    <div className="terms-page">
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Doggy World! By accessing our website, you agree to comply 
        with the following terms and conditions:
      </p>

      <div className="terms-cards">
        {termsList.map((term, idx) => (
          <LazyTerm key={idx} text={term} />
        ))}
      </div>

      <p className="thank-you">Thank you for choosing Doggy World!</p>
    </div>
  );
}

/* ✅ Lazy-loaded term card component */
function LazyTerm({ text }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`term-card ${visible ? "visible" : "hidden"}`}>
      {visible && <p>{text}</p>}
    </div>
  );
}

export default Terms;
