import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Settings, Hammer } from "lucide-react";

export default function RangeOfKWS() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "backOut" },
    },
  };

  const ranges = [
    {
      title: "Custom Modular",
      description:
        "LLuxe Living's Custom Modular range is one of the best-selling, highly durable, and budget-friendly solutions.",
      features: [
        "Carcass Assembly: Manual edge binding profile for precision and strength.",
        "Shutters: Machine-finished, hot-pressed shutters with premium edge binding.",
        "Customization: Materials, finishes, and designs can be fully customized.",
        "Warranty: Includes a 6-year assembly warranty for worry-free usage.",
      ],
      icon: Settings,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
    },
    {
      title: "Fully Modular",
      description:
        "LLuxe Living delivers premium modular products on par with top branded retailers.",
      features: [
        "Manufactured and installed to your order with factory-quality precision.",
        "Warranty: Backed by a 10-year warranty for long-lasting performance.",
      ],
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Fully Carpentry",
      description:
        "Our Fully Carpentry service delivers traditional on-site craftsmanship.",
      features: [
        "Execution: Cutting and shaping performed directly at your site.",
        "Warranty: Comes with a 4-year assembly warranty for durability and peace of mind.",
      ],
      icon: Hammer,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Range of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">
              KWS
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium interior solutions,
            crafted with precision and backed by exceptional warranties.
          </p>
        </motion.div>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {ranges.map((range, index) => {
            const IconComponent = range.icon;
            return (
              <motion.div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border-2 ${range.borderColor} ${range.bgColor} p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gray-400 to-gray-600 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Icon */}
                <motion.div
                  className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${range.color} flex items-center justify-center mb-6 shadow-lg`}
                  variants={iconVariants}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {range.title}
                  </h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {range.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {range.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Connect with our experts to discuss your project requirements and
              get a personalized quote.
            </p>
            <a
              href="https://wa.me/+918420906352"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Get Started Today</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
