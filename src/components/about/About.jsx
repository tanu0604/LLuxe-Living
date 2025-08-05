import React from "react";
import { motion } from "framer-motion"; // Animation library for smooth transitions
import aboutImg from "../../assets/AboutImg.jpg"; // Local image for About section

export default function About() {
  // Animation variant for fading and sliding text upward
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation variant for fading and sliding image from left
  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    // Main section wrapper with padding and background color
    <section className="py-20 bg-[#FAF9F6]" id="about">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Section Heading with animation */}
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-gray-800 text-center font-serif mb-12 tracking-wide"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          About Us
        </motion.h1>

        {/* Flex container: switches between column (mobile) and row (desktop) */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Image with animation */}
          <motion.div
            className="w-full lg:w-1/2 overflow-hidden rounded-3xl shadow-xl"
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true }}
          >
            <img
              src={aboutImg}
              alt="Interior design showcase"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Text content with animation */}
          <motion.div
            className="w-full lg:w-1/2 text-gray-800 text-lg leading-relaxed space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={textVariants}
            viewport={{ once: true }}
          >
            {/* Tagline */}
            <p className="italic text-gray-600 text-xl">
              "Designing spaces that tell your story."
            </p>

            {/* Intro paragraph */}
            <p>
              At <span className="font-semibold">LLuxe Living</span>,
              we craft timeless interiors that blend functionality with
              aesthetics. Whether it's your home or office, we believe every
              space should reflect elegance, comfort, and personality.
            </p>

            {/* Service description */}
            <p>
              Our expert designers curate personalized solutions, transforming
              ideas into breathtaking realities. Let us elevate your living and
              working environment with a touch of sophistication.
            </p>

            {/* WhatsApp contact button */}
            <a
              href="https://wa.me/+918420906352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white py-3 px-8 rounded-full text-lg font-medium shadow hover:bg-gray-700 transition duration-300"
            >
              Connect with Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
