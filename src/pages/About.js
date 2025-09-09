import "../styles/About.css";
import { useRef, useState, useEffect } from "react";
import dog1 from "../assets/our founder.jpg";
import dog2 from "../assets/shop.jpg";
import dog3 from "../assets/community.jpg";
import dog4 from "../assets/dog2.jpg"; // ✅ You might want to swap this for a unique 4th image

function About() {
  const sections = [
    {
      title: "Our Founder",
      text: "Chippa our founder and lifelong dog lover has been devoted to the wellbeing of dogs, especially those in distress. His respect for the American Pit Bull Terrier (APBT) stems from their gentle, intelligent, and fiercely loyal nature. We stand firmly against dog fighting and advocate for the dignity of every breed.",
      img: dog1,
    },
    {
      title: "Our First Shop",
      text: "In 2008, our first dog shop opened in Ennerdale. From day one, Doggy World has been committed to supplying the best brands at the most affordable prices  because quality nutrition shouldn’t be a luxury, it should be a daily act of love.",
      img: dog2,
    },
    {
      title: "Our Community",
      text: "We’re proudly South African and deeply rooted in our community. Every formula we stock meets our standards for safety, transparency, and nutritional integrity. We help pet owners make confident, informed choices for playful pups or senior companions.",
      img: dog3,
    },
    {
      title: "Our Values",
      text: "Doggy World is built on relationships  between pets and their people, and between our team and the families we serve. We’re not just a supplier; we’re a partner in your dog’s wellbeing. Dogs aren’t just pets. They’re family.",
      img: dog4,
    },
  ];

  return (
    <div className="about-page">
      {sections.map((section, index) => (
        <FadeIn
          key={index}
          className={`card-section ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="card-text">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="card-image">
            <img src={section.img} alt={section.title} loading="lazy" />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* Fade-in wrapper */


function FadeIn({ children, className }) {
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
      className={`${className} ${visible ? "fade-visible" : "fade-hidden"}`}
    >
      {children}
    </section>
  );
}

export default About;
