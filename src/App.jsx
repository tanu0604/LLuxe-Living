import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import RangeOfKWS from "./components/range/RangeOfKWS";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/library/Gallery";
import CategoryPage from "./components/library/CategoryPage";
import WhatsappForm from "./components/form/WhatsappForm";
import PriceCalculator from "./components/PriceCalculator/PriceCalculator";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <Router>
      {/* Navigation bar stays visible on all pages */}
      <ScrollToTop></ScrollToTop>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/range" element={<RangeOfKWS />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/gallery/:categoryId" element={<CategoryPage />} />
        <Route path="/form" element={<WhatsappForm />} />
        <Route path="/calculator" element={<PriceCalculator />}></Route>
      </Routes>

      {/* Footer stays visible on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
