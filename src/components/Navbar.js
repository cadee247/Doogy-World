import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left section: logo */}
        <div className="navbar-left">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="Doggy World Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger button (shown only on mobile) */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Links */}
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/didyouknow" onClick={() => setMenuOpen(false)}>Did You Know</Link>
          <Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
          <Link to="/terms" onClick={() => setMenuOpen(false)}>Terms</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
