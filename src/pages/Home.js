import "../styles/Home.css";
import { useEffect, useRef, useState } from "react";
import dogPic from "../assets/dog2.jpg";
import catPic from "../assets/homepagecat.jpg";
import homepageBanner from "../assets/homepage.jpg"; 

function Home() {
  const cards = [
    {
      title: "Dogs 🐕",
      text: "We’ve got tails wagging and bowls brimming your one-stop shop for every dog’s daily delight. From nutritious meals to tasty treats, we supply all your dog’s food needs with love, care, and a whole lot of tail-wagging joy.",
      img: dogPic,
    },
    {
      title: "Cats 🐈",
      text: "From curious kittens to regal loungers, we’ve got every feline covered. Nutritious meals, irresistible treats, and all the purr-worthy essentials, if your cat needs it, we supply it with care, quality, and a touch of whiskered charm.",
      img: catPic,
    },
  ];

  return (
    <div className="home-page">
      {/* HERO BANNER */}
      <LazyFadeSection className="hero-banner">
        <img
          src={homepageBanner}
          alt="Doggy World Banner"
          className="banner-img"
          loading="lazy"
        />
        <div className="banner-overlay">
         
        </div>
      </LazyFadeSection>

      {/* IMAGE CARDS */}
      {cards.map((card, index) => (
        <LazyFadeSection
          className={`card-section ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
          delay={index * 0.2}
        >
          <div className="card-image">
            <img src={card.img} alt={card.title} loading="lazy" />
          </div>
          <div className="card-text">
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        </LazyFadeSection>
      ))}
    </div>
  );
}

/* ✅ Reusable lazy-fade wrapper */
function LazyFadeSection({ children, className, delay = 0 }) {
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
    <section
      ref={ref}
      className={`${className} ${visible ? "visible" : "hidden"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </section>
  );
}

export default Home;
