import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>
        <i className="fas fa-paw"></i> © {new Date().getFullYear()} Doggy World. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
