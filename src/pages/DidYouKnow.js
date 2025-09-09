import React, { useRef, useEffect, useState } from "react";
import "../styles/DidYouKnow.css";

function DidYouKnow() {
  const facts = [
    {
      animal: "Kittens 🐱",
      fact: "A kitten’s purring isn’t just for comfort — research shows purr vibrations (25–150 Hz) can promote tissue regeneration and bone healing.",
    },
    {
      animal: "Puppies 🐶",
      fact: "Puppies are born unable to control their own body temperature. For the first 2 weeks, they rely completely on their mother’s warmth.",
    },
    {
      animal: "Dogs 🐕",
      fact: "Dogs have a special nose organ called the Jacobson’s organ that lets them detect pheromones — essentially giving them a ‘sixth sense’.",
    },
    {
      animal: "Cats 🐈",
      fact: "Cats have a unique ‘righting reflex’ — even blindfolded, they can twist their bodies in midair to land on their feet.",
    },
    {
      animal: "Whiskers ✨",
      fact: "A cat’s whiskers aren’t just facial hair — they’re ultra-sensitive radar tools that detect tiny air changes to help them move in the dark.",
    },
    {
      animal: "Dog Brains 🧠",
      fact: "Dogs can understand up to 250 words and gestures — roughly the intelligence of a 2-year-old human child.",
    },
    {
      animal: "Kitten Growth ⚡",
      fact: "Kittens double their body weight in the first week of life. That’s like a human baby reaching toddler size in just 7 days!",
    },
    {
      animal: "Dog Paws 🐾",
      fact: "Dogs have sweat glands only in their paw pads — that’s why you might see little wet footprints on a hot day.",
    },
    {
      animal: "Cat Hearts 💓",
      fact: "A cat’s heart beats almost twice as fast as a human’s — 140–220 beats per minute. That’s like running even when they’re napping.",
    },
    {
      animal: "Ancient Friends 🏺",
      fact: "The oldest known pet cat was found in a 9,500-year-old grave in Cyprus — proving cats were domesticated long before ancient Egypt.",
    },

    // 🔥 DoggyWorld Product Fun Facts
    {
      animal: "DoggyWorld Treats 🍖",
      fact: "Fun Fact: Training a dog is 3x easier with high-value rewards! DoggyWorld’s natural training treats are designed to keep tails wagging while teaching new tricks.",
    },
    {
      animal: "DoggyWorld Toys 🎾",
      fact: "Did you know? Dogs chew not just for fun but to relieve stress. DoggyWorld’s chew toys protect furniture AND help with dental health!",
    },
    {
      animal: "DoggyWorld Food 🥩",
      fact: "Surprise! Grain-free diets can boost energy in active dogs. DoggyWorld’s premium food blends are packed with protein to fuel every adventure.",
    },
    {
      animal: "Catnip Toys from DoggyWorld 🌿",
      fact: "Over 70% of cats respond to catnip! DoggyWorld’s catnip toys give your feline friends bursts of playful energy (and then the cutest naps).",
    },
  ];

  return React.createElement(
    "div",
    { className: "didyouknow-page" },
    React.createElement("h2", null, "Did You Know? 🐾"),
    React.createElement(
      "p",
      { className: "intro" },
      "Here are some surprising and fun facts about pets — mixed with DoggyWorld’s very own FunFacts about products your pets will love!"
    ),

    React.createElement(
      "div",
      { className: "facts-grid" },
      facts.map((item, idx) =>
        React.createElement(
          LazyFadeCard,
          { key: idx },
          React.createElement(
            "div",
            { className: "fact-card" },
            React.createElement("h3", null, item.animal),
            React.createElement("p", null, item.fact)
          )
        )
      )
    ),

    // Final promo
    React.createElement(
      "div",
      { className: "promo-section" },
      React.createElement("h3", null, "🐕🐾 DoggyWorld: Where Fun Meets Care 🐾🐈"),
      React.createElement(
        "p",
        null,
        "From tasty treats to playful toys, DoggyWorld has everything to keep your furry friends healthy and happy. Don’t just learn fun facts — give your pets the best life possible!"
      ),
      React.createElement(
        "a",
        { href: "/products", className: "promo-button" },
        "View Products"
      )
    )
  );
}

/* Lazy fade-in wrapper */
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

  return React.createElement(
    "div",
    { ref, className: visible ? "fade-visible" : "fade-hidden" },
    children
  );
}

export default DidYouKnow;
