import { useParams } from "react-router-dom";
import { categories } from "./Gallery";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(categoryId));

  if (!category) {
    return (
      <div className="text-center text-xl font-semibold py-10">
        Category not found
      </div>
    );
  }

  // Animation for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Animation for the image grid items
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Category Title with Animation */}
      <motion.h1
        className="text-3xl sm:text-4xl mt-6 font-bold mb-8 text-center text-gray-800 hover:text-blue-500 transition"
        initial="hidden"
        animate="visible"
        variants={titleVariants}
      >
        {category.title}
      </motion.h1>

      {/* Image Grid with Animation */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {category.images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group overflow-hidden rounded-xl"
            variants={imageItemVariants}
          >
            <img
              src={image}
              alt={`${category.title} ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
