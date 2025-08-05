import React, { useEffect } from "react";
import headingImg from "../../assets/hero.jpg"; // Hero background image
import { motion } from "framer-motion"; // For animations
import AOS from "aos"; // Animate On Scroll library
import "aos/dist/aos.css"; // AOS CSS

// Page sections (importing components)
import About from "../about/About";
import Gallery from "../library/Gallery";
import PriceCalculator from "../PriceCalculator/PriceCalculator";
import WhatsappForm from "../form/WhatsappForm";

export default function Home() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* ===== Hero Section ===== */}
      <section
        className="relative w-full min-h-[500px] lg:min-h-[600px] overflow-hidden"
        id="home"
      >
        {/* Background Image with dark gradient overlay */}
        <div className="absolute inset-0">
          <img
            src={headingImg}
            alt="LLUXE Living"
            className="w-full h-full object-cover brightness-[0.6] blur-[0.5px]"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="container relative h-full flex items-center justify-center text-center p-4 pt-24 lg:pt-32">
          <div className="max-w-3xl space-y-6">
            {/* Animated Heading */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to <span className="text-gray-200">LLuxe Living</span>
            </motion.h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 italic">
              Transform your space with elegance and creativity.
            </p>

            {/* Call-to-action button with animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="https://wa.me/+918420906352"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-medium rounded-full text-lg px-10 py-3 shadow-md hover:shadow-xl hover:bg-gray-100 transition-all duration-300 inline-block"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Additional Website Sections ===== */}

      {/* About Section with fade-up animation */}
      <div data-aos="fade-up">
        <About />
      </div>

      {/* Gallery Section with fade-up and delay */}
      <div data-aos="fade-up" data-aos-delay="200">
        <Gallery />
      </div>

      {/* Price Calculator Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <PriceCalculator />
      </div>

      {/* WhatsApp Form Section */}
      <div data-aos="fade-up" data-aos-delay="200">
        <WhatsappForm />
      </div>
    </>
  );
}
