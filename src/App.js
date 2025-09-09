import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import DidYouKnow from "./pages/DidYouKnow";
import FAQs from "./pages/FAQs";
import Terms from "./pages/Terms";
import DogProducts from "./pages/DogProducts";
import CatProducts from "./pages/CatProducts";
import TreatsProducts from "./pages/TreatsProducts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/dogs" element={<DogProducts />} />
<Route path="/products/cats" element={<CatProducts />} />
<Route path="/products/treats" element={<TreatsProducts />} />

        <Route path="/didyouknow" element={<DidYouKnow />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </Router>
  );
}

export default App;
