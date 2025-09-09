import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        {/* Using a unicode paw instead of Font Awesome to avoid missing icons */}
        <span role="img" aria-label="paw">🐾</span> © {new Date().getFullYear()} Doggy World. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
