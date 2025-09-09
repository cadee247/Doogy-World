import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "27658663137"; // Correct international format
  const message = "Hi there! I have a question about your products.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true"></i>
    </a>
  );
}

export default WhatsAppButton;
