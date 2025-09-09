import React, { useRef, useEffect, useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const storeHours = [
    { day: "Monday", time: "8:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 7:00 PM" },
    { day: "Thursday", time: "8:00 AM – 7:00 PM" },
    { day: "Friday", time: "8:00 AM – 7:00 PM" },
    { day: "Saturday", time: "8:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
    { day: "Public holidays", time: "Closed" },
  ];

  return (
    <div className="contact-page">
      <h1>Contact DoggyWorld</h1>

      <FadeInCard>
        <div className="contact-card">
          <h2>📍 Address</h2>
          <p>286 6th Avenue, Mid Ennerdale, Johannesburg 1825</p>
        </div>
      </FadeInCard>

      <FadeInCard>
        <div className="contact-card">
          <h2>🕒 Trading Hours</h2>
          <ul className="store-hours">
            {storeHours.map((item, index) => (
              <li key={index}>
                <span>{item.day}</span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeInCard>

      <FadeInCard>
        <div className="contact-card">
          <h2>☎ Contact Info</h2>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:0672975527">067 297 5527</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/27658663137"
              target="_blank"
              rel="noopener noreferrer"
            >
              065 866 3137
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@doggyworld.co.za">info@doggyworld.co.za</a>
          </p>
        </div>
      </FadeInCard>
    </div>
  );
}

/* Reusable fade-in wrapper */
function FadeInCard({ children }) {
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

export default Contact;
