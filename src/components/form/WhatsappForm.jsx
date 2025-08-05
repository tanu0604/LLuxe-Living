import { useState } from "react";
import { motion } from "framer-motion"; // For animation effects

// WhatsappForm component - collects project details and redirects to WhatsApp with a prefilled message
const WhatsappForm = () => {
  // State variables to store form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState(500);
  const [bhk, setBhk] = useState("1BHK");
  const [finish, setFinish] = useState("Standard");
  const [customizations, setCustomizations] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // WhatsApp number to send form data to
  const whatsappNumber = "+918420906352";

  // Options available for customization
  const customizationOptions = [
    "Modular Kitchen",
    "False Ceiling",
    "Wall Paint & Texture",
    "Smart Lighting",
    "Wooden Flooring",
  ];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Disable button while processing

    // Format message for WhatsApp
    const message = `
    Hello,

    I would like to inquire about interior design services for my property. Here are the details:

    *Name*: ${name}
    *Email*: ${email}
    *Phone*: ${phone}
    *Area*: ${area} sq. ft.
    *BHK Type*: ${bhk}
    *Finish Type*: ${finish}
    *Customizations*: ${customizations.join(", ") || "None"}

    Please let me know how we can proceed with the design and any further steps I need to take.

    Thank you.
  `;

    // Encode message and redirect to WhatsApp chat
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.location.href = whatsappUrl;

    setIsSubmitting(false); // Reset button state
  };

  // Toggle selection for customization options
  const toggleCustomization = (option) => {
    setCustomizations((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Animation config for heading text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      className="py-12 bg-gradient-to-br from-gray-50 to-white"
      id="whatsappform"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Animated Section Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 text-center tracking-tight mb-6"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Project Inquiry Form
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Share your project details and we'll get back to you with a
          personalized quote
        </motion.p>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl text-gray-800 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              />
            </div>

            {/* Area Input */}
            <div>
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Area (in sq. ft.)
              </label>
              <input
                id="area"
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                required
                min="300"
                max="5000"
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              />
            </div>

            {/* BHK Dropdown */}
            <div>
              <label
                htmlFor="bhk"
                className="block text-sm font-medium text-gray-700"
              >
                Select BHK Type
              </label>
              <select
                id="bhk"
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              >
                <option value="1BHK">1BHK</option>
                <option value="2BHK">2BHK</option>
                <option value="3BHK">3BHK</option>
                <option value="4BHK">4BHK</option>
              </select>
            </div>

            {/* Finish Dropdown */}
            <div>
              <label
                htmlFor="finish"
                className="block text-sm font-medium text-gray-700"
              >
                Select Finish Type
              </label>
              <select
                id="finish"
                value={finish}
                onChange={(e) => setFinish(e.target.value)}
                className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-gray-600 focus:border-gray-600 transition-all duration-300"
              >
                <option value="Basic">Basic</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>
            </div>

            {/* Customization Checkboxes */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Select Customizations
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {customizationOptions.map((option) => (
                  <label key={option} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={customizations.includes(option)}
                      onChange={() => toggleCustomization(option)}
                      className="h-5 w-5 focus:ring-2 focus:ring-gray-600 text-gray-900 rounded"
                    />
                    <span className="text-gray-600">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 text-white bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WhatsappForm;
