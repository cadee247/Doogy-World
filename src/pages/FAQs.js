import React from "react";
import "../styles/FAQs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function FAQs() {
  const faqs = [
    {
      question: "Do you offer deliveries?",
      answer: "Currently, we do not deliver. All purchases are in-store only."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Cash and card payments are accepted in-store."
    },
    {
      question: "Can I buy in bulk?",
      answer: "Yes! Bulk purchases are available for most of our products."
    },
    {
      question: "What are your store hours?",
      answer: "Open Monday to Saturday: 8am - 7pm. Sunday: Closed."
    },
    {
      question: "Do you have a vet on-site?",
      answer: "No, we do not have a vet on-site, but we can recommend trusted local veterinarians."
    },
    {
      question: "Do you sell dog training supplies?",
      answer: "Absolutely! We offer treats, toys, and accessories to help train your dog effectively."
    },
    {
      question: "Can I buy cat food here?",
      answer: "Yes, we have a wide range of cat foods, treats, and accessories."
    },
    {
      question: "Are your products premium quality?",
      answer: "Yes, all our products are carefully selected to ensure high quality and safety for your pets."
    },
    {
      question: "What is the best food for my dog?",
      answer: "the dog food that provides 20% protein and 8% fat, which will keep your dog healthy and active."
    },
  ];

const testimonials = [
  
  {
    name: "Sammy J",
    rating: 3,
    comment:
      "Customer friendly and very neat and well-established business. Staff is very helpful and owners are well acquainted with products being sold in-store."
  },
  {
    name: "Shannen Living",
    rating: 5,
    comment:
      "Prices are very reasonable. The staff members are knowledgeable and very helpful and friendly."
  },
  {
    name: "Karleigh",
    rating: 5,
    comment: "Perfect place, excellent service 🐕‍🦺."
  },
  {
    name: "Nolan Jafta",
    rating: 5,
    comment: "Good service and competitive prices."
  },
  {
    name: "Sizwe Sizwe",
    rating: 5,
    comment: "Very fast and reliable service... and the staff is very assisting."
  },
  {
    name: "Kabelo Tlhapane",
    rating: 4,
    comment: "Get your dog food here — excellent service."
  },
  {
    name: "Zunaid Omar",
    rating: 5,
    comment: "Great products and services."
  },
  {
    name: "Ian Meyer",
    rating: 5,
    comment: "The best in the south."
  },
  {
    name: "Zaheer Goolam",
    rating: 5
  },
  {
    name: "Kirstie Ally",
    rating: 5
  },
  {
    name: "C Links",
    rating: 3
  },
  {
    name: "Ncebakazi 'Yollie yolz' Malusi",
    rating: 5
  },
  {
    name: "Mr Bell",
    rating: 5
  },
  {
    name: "Trevor Barendse",
    rating: 4
  }
];

  const renderStars = (rating) => "⭐".repeat(rating);

  return (
    <div className="faqs-page">
      {/* FAQs Section */}
      <h2>FAQs 🐾</h2>
      <p className="intro">Quick answers to common questions about DoggyWorld.</p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {faqs.map((faq, idx) => (
          <SwiperSlide key={idx}>
            <div className="faq-card">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Testimonials Section */}
      <h2 style={{ marginTop: "3rem" }}>Testimonials 💬</h2>
      <p className="intro">Hear what our happy customers have to say!</p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="faq-card testimonial-card">
              <h3>{t.name}</h3>
              <p className="stars">{renderStars(t.rating)}</p>
              <p className="comment">"{t.comment}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FAQs;
