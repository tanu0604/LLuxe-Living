import { useRef, useEffect, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

//for living room
import livingRoom1 from "../../assets/library/livingroom/1.jpg";
import livingRoom2 from "../../assets/library/livingroom/2.jpg";
import livingRoom3 from "../../assets/library/livingroom/3.jpg";
import livingRoom4 from "../../assets/library/livingroom/4.jpg";
import livingRoom5 from "../../assets/library/livingroom/5.jpg";
import livingRoom6 from "../../assets/library/livingroom/6.jpg";
import livingRoom7 from "../../assets/library/livingroom/7.jpg";
import livingRoom8 from "../../assets/library/livingroom/8.jpg";
import livingRoom9 from "../../assets/library/livingroom/9.jpg";
import livingRoom10 from "../../assets/library/livingroom/10.jpg";
import livingRoom11 from "../../assets/library/livingroom/11.jpg";
import livingRoom12 from "../../assets/library/livingroom/12.jpg";

//for bedroom
import bedroom1 from "../../assets/library/bedroom/1.jpg";
import bedroom2 from "../../assets/library/bedroom/2.jpg";
import bedroom3 from "../../assets/library/bedroom/3.jpg";
import bedroom4 from "../../assets/library/bedroom/4.jpg";
import bedroom5 from "../../assets/library/bedroom/5.jpg";
import bedroom6 from "../../assets/library/bedroom/6.jpg";
import bedroom7 from "../../assets/library/bedroom/7.jpg";
import bedroom8 from "../../assets/library/bedroom/8.jpg";
import bedroom9 from "../../assets/library/bedroom/9.jpg";
import bedroom10 from "../../assets/library/bedroom/10.jpg";
import bedroom11 from "../../assets/library/bedroom/11.jpg";
import bedroom12 from "../../assets/library/bedroom/12.jpg";

//images of kitchen space
import kitchen1 from "../../assets/library/kitchen/1.jpg";
import kitchen2 from "../../assets/library/kitchen/2.jpg";
import kitchen3 from "../../assets/library/kitchen/3.jpg";
import kitchen4 from "../../assets/library/kitchen/4.jpg";
import kitchen5 from "../../assets/library/kitchen/5.jpg";
import kitchen6 from "../../assets/library/kitchen/6.jpg";
import kitchen7 from "../../assets/library/kitchen/7.jpg";
import kitchen8 from "../../assets/library/kitchen/8.jpg";
import kitchen9 from "../../assets/library/kitchen/9.jpg";
import kitchen10 from "../../assets/library/kitchen/10.jpg";
import kitchen11 from "../../assets/library/kitchen/11.jpg";
import kitchen12 from "../../assets/library/kitchen/12.jpg";

//image of dining room
import dining1 from "../../assets/library/dining/1.jpg";
import dining2 from "../../assets/library/dining/2.jpg";
import dining3 from "../../assets/library/dining/3.jpg";
import dining4 from "../../assets/library/dining/4.jpg";
import dining5 from "../../assets/library/dining/5.jpg";
import dining6 from "../../assets/library/dining/6.jpg";
import dining7 from "../../assets/library/dining/7.jpg";
import dining8 from "../../assets/library/dining/8.jpg";
import dining9 from "../../assets/library/dining/9.jpg";

//images of office interiors
import office1 from "../../assets/library/office/1.jpg";
import office2 from "../../assets/library/office/2.jpg";
import office3 from "../../assets/library/office/3.jpg";
import office4 from "../../assets/library/office/4.jpg";
import office5 from "../../assets/library/office/5.jpg";
import office6 from "../../assets/library/office/6.jpg";

//images of bathroom interiors
import bathroom1 from "../../assets/library/bathroom/1.jpg";
import bathroom2 from "../../assets/library/bathroom/2.jpg";
import bathroom3 from "../../assets/library/bathroom/3.jpg";
import bathroom4 from "../../assets/library/bathroom/4.jpg";
import bathroom5 from "../../assets/library/bathroom/5.jpg";
import bathroom6 from "../../assets/library/bathroom/6.jpg";

//furniture and decor images
import furniture1 from "../../assets/library/furniture/1.jpg";
import furniture2 from "../../assets/library/furniture/2.jpg";
import furniture3 from "../../assets/library/furniture/3.jpg";
import furniture4 from "../../assets/library/furniture/4.jpg";
import furniture5 from "../../assets/library/furniture/5.jpg";
import furniture6 from "../../assets/library/furniture/6.jpg";
import furniture7 from "../../assets/library/furniture/7.jpg";
import furniture8 from "../../assets/library/furniture/8.jpg";
import furniture9 from "../../assets/library/furniture/9.jpg";

//for puja room
import puja1 from "../../assets/library/puja/1.jpg";
import puja2 from "../../assets/library/puja/2.jpg";
import puja3 from "../../assets/library/puja/3.jpg";
import puja4 from "../../assets/library/puja/4.jpg";
import puja5 from "../../assets/library/puja/5.jpg";
import puja6 from "../../assets/library/puja/6.jpg";
import puja7 from "../../assets/library/puja/7.jpg";
import puja8 from "../../assets/library/puja/8.jpg";
import puja9 from "../../assets/library/puja/9.jpg";
import puja10 from "../../assets/library/puja/10.jpg";
import puja11 from "../../assets/library/puja/11.jpg";
import puja12 from "../../assets/library/puja/12.jpg";
import { useNavigate } from "react-router-dom";

export const categories = [
  {
    id: 1,
    title: "Living Room Designs",
    tags: ["Modern", "Minimalist", "Traditional", "Boho"],
    images: [
      livingRoom1,livingRoom2,livingRoom3,livingRoom4,livingRoom5,livingRoom6,livingRoom7,livingRoom8,livingRoom9,livingRoom10,livingRoom11,livingRoom12,
    ], 
  },
  {
    id: 2,
    title: "Bedroom Interiors",
    tags: ["Cozy setups", "Luxury bedrooms", "Kids' rooms"],
    images: [
      bedroom1, bedroom2, bedroom3, bedroom4, bedroom5, bedroom6, bedroom7, bedroom8, bedroom9, bedroom10, bedroom11, bedroom12,
    ],
  },
  {
    id: 3,
    title: "Kitchen Spaces",
    tags: ["Modular kitchens", "Open kitchen concepts"],
    images: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5,kitchen6,kitchen7,kitchen8,kitchen9,kitchen10,kitchen11,kitchen12], 
  },
  {
    id: 4,
    title: "Dining Spaces",
    tags: ["Modular kitchens", "Open kitchen concepts"],
    images: [dining1, dining2, dining3, dining4, dining5,dining6, dining7, dining8, dining9], 
  },
  {
    id: 5,
    title: "Puja Room",
    tags: ["Traditional Decor", "Spiritual Vibes"],
    images: [
      puja1, puja2,puja3,puja4, puja5,puja6, puja7, puja8, puja9,puja10,puja11,puja12,
    ], 
  },
  {
    id: 6,
    title: "Office Interiors",
    tags: ["Work-from-home setups", "Corporate office designs"],
    images: [office1, office2, office3, office4, office5, office6], // Updated to array of images
  },
  {
    id: 7,
    title: "Bathroom & Spa Interiors",
    tags: ["Luxury baths", "Wellness spaces"],
    images: [bathroom1, bathroom2, bathroom3, bathroom4, bathroom5,bathroom6], // Updated to array of images
  },
  {
    id: 8,
    title: "Custom Furniture & Decor",
    tags: ["Unique furniture pieces", "Handmade designs"],
    images: [furniture1, furniture2, furniture3, furniture4,furniture5,furniture6,furniture7,furniture8,furniture9], // Updated to array of images
  },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(containerRef);
  const navigate = useNavigate();

  const [visibleImages, setVisibleImages] = useState(3); // Initially show 3 images per category

  // Update to handle category navigation
  const handleOnClick = (categoryId) => {
    navigate(`/gallery/${categoryId}`); // Navigate to specific category page
  };

  // Handle "See More" button click for more images
  const handleSeeMore = (categoryId) => {
    setVisibleImages((prev) => prev + 3); // Add 3 more images
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -300 * categories.length],
        transition: { duration: 20, ease: "linear", repeat: Infinity },
      });
    }
  }, [controls, isInView, categories.length]);

  return (
    <section
      className="relative w-full min-h-screen lg:min-h-[600px] overflow-hidden p-20"
      id="interior-library"
    >
      <div className="container mx-auto px-4 mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-gray-900 text-center font-serif mb-10"
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-center max-w-2xl mx-auto"
        >
          Explore a variety of interior designs categorized for easy browsing.
          Click "See More" to view related images.
        </motion.p>
      </div>

      <div ref={containerRef} className="relative w-full overflow-hidden py-8">
        <motion.div
          animate={controls}
          className="flex gap-6 w-fit"
          onHoverStart={() => controls.stop()}
          onHoverEnd={() =>
            controls.start({
              x: [0, -300 * categories.length],
              transition: { duration: 20, ease: "linear", repeat: Infinity },
            })
          }
        >
          {categories.map((category, index) => (
            <motion.div
              key={`${category.id}-${index}`}
              className="relative group w-[300px] flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <div className="w-full h-full flex overflow-x-auto gap-2 scroll-smooth scrollbar-hide">
                  {category.images
                    .slice(0, visibleImages)
                    .map((image, imgIdx) => (
                      <img
                        key={imgIdx}
                        src={image}
                        alt={`${category.title} ${imgIdx + 1}`}
                        className="object-cover w-full h-full flex-shrink-0 rounded-xl"
                      />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 translate-y-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-active:opacity-100 group-active:translate-y-0">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.tags.map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => handleOnClick(category.id)} // Pass the category's id here
                    className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
                  >
                    See More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* "See More" Button Logic */}
      {categories.map((category) => (
        <div key={category.id} className="mt-6">
          <button
            onClick={() => handleSeeMore(category.id)}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            See More
          </button>
        </div>
      ))}
    </section>
  );
}
