"use client";

import { useState } from "react";
import {
  Check,
  Home,
  PaintBucket,
  Lightbulb,
  ChefHat,
  Layers,
} from "lucide-react";
import clsx from "clsx";
import { motion } from "framer-motion"; // Import framer-motion
import Card from "./ui/Card/Card";
import CardContent from "./ui/Card/CardContent";
import CardDescription from "./ui/Card/CardDescription";
import CardFooter from "./ui/Card/CardFooter";
import CardHeader from "./ui/Card/CardHeader";
import CardTitle from "./ui/Card/CardTitle";
import Slider from "./ui/Slider/Slider";
import Button from "./ui/Button/Button";
import Tabs from "./ui/Tabs/Tabs";
import TabsContent from "./ui/Tabs/TabsContent";
import TabsList from "./ui/Tabs/TabsList";
import TabsTrigger from "./ui/Tabs/TabsTrigger";

const PriceCalculator = () => {
  const [bhk, setBhk] = useState("1BHK");
  const [area, setArea] = useState(500);
  const [finish, setFinish] = useState("Standard");
  const [customizations, setCustomizations] = useState([]);
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState("property");

  const customizationOptions = [
    { name: "Modular Kitchen", icon: <ChefHat className="h-4 w-4 mr-2" /> },
    { name: "False Ceiling", icon: <Layers className="h-4 w-4 mr-2" /> },
    {
      name: "Wall Paint & Texture",
      icon: <PaintBucket className="h-4 w-4 mr-2" />,
    },
    { name: "Smart Lighting", icon: <Lightbulb className="h-4 w-4 mr-2" /> },
    { name: "Wooden Flooring", icon: <Layers className="h-4 w-4 mr-2" /> },
  ];

  const basePrices = { "1BHK": 1000, "2BHK": 1500, "3BHK": 2000, "4BHK": 2500 };
  const finishMultiplier = { Basic: 1, Standard: 1.2, Premium: 1.5 };
  const customizationCost = 500;

  const calculateCost = () => {
    setIsCalculating(true);
    setTimeout(() => {
      let cost = basePrices[bhk] * area * finishMultiplier[finish];
      cost += customizations.length * customizationCost;
      setEstimatedCost(cost);
      setIsCalculating(false);
    }, 600);
    setCustomizations([]);
  };

  const toggleCustomization = (option) => {
    setCustomizations((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="py-16 bg-gray-50" id="priceCalculator">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-semibold text-gray-900 text-center font-serif mb-10"
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        Calculate the price
      </motion.h1>
      <motion.div
        className="max-w-4xl mx-auto p-4 bg-gray-100 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Card className="border-none shadow-lg bg-white">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-blue-500">
              Price Calculator
            </CardTitle>
            <CardDescription className="text-gray-200">
              Quickly estimate the cost of your interior design project with our
              intuitive tool.
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6 space-y-8">
            <Tabs className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="property"
                  activeTab={activeTab}
                  onClick={() => setActiveTab("property")}
                >
                  Property Details
                </TabsTrigger>
                <TabsTrigger
                  value="finish"
                  activeTab={activeTab}
                  onClick={() => setActiveTab("finish")}
                >
                  Finish Type
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  activeTab={activeTab}
                  onClick={() => setActiveTab("custom")}
                >
                  Customizations
                </TabsTrigger>
              </TabsList>

              <TabsContent
                value="property"
                activeTab={activeTab}
                className="space-y-6"
              >
                <motion.h3
                  className="text-lg font-medium mb-3"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Select BHK Type
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {Object.keys(basePrices).map((type) => (
                    <Button
                      key={type}
                      variant={bhk === type ? "default" : "outline"}
                      onClick={() => setBhk(type)}
                    >
                      <Home className="h-4 w-4" />
                      <span>{type}</span>
                    </Button>
                  ))}
                </div>
                <motion.h3
                  className="text-lg font-medium mb-3"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Total Area: {area} sq. ft.
                </motion.h3>
                <Slider
                  value={area}
                  min={300}
                  max={3000}
                  step={50}
                  onValueChange={setArea}
                />
              </TabsContent>

              <TabsContent
                value="finish"
                activeTab={activeTab}
                className="space-y-6"
              >
                <motion.h3
                  className="text-lg font-medium mb-3"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Select Finish Type
                </motion.h3>
                <div className="grid grid-cols-3 gap-3">
                  {Object.keys(finishMultiplier).map((type) => (
                    <Button
                      key={type}
                      variant={finish === type ? "default" : "outline"}
                      onClick={() => setFinish(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </TabsContent>

              <TabsContent
                value="custom"
                activeTab={activeTab}
                className="space-y-6"
              >
                <motion.h3
                  className="text-lg font-medium mb-3"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Select Customizations
                </motion.h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {customizationOptions.map((option) => (
                    <Button
                      key={option.name}
                      variant={
                        customizations.includes(option.name)
                          ? "default"
                          : "outline"
                      }
                      onClick={() => toggleCustomization(option.name)}
                    >
                      {option.icon} {option.name}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>

          <CardFooter className="flex flex-col p-6 pt-0 gap-4">
            <Button
              onClick={calculateCost}
              className="w-full h-12 text-lg font-medium bg-blue-300 text-white"
              disabled={isCalculating}
            >
              {isCalculating ? "Calculating..." : "Calculate Estimate"}
            </Button>

            {estimatedCost && (
              <motion.div
                className="w-full mt-4 p-6 bg-gray-200 rounded-lg border border-gray-300"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-lg font-medium text-center text-gray-700 mb-2">
                  Your Estimated Cost
                </h3>
                <p className="text-3xl font-bold text-center text-gray-900">
                  ₹{estimatedCost.toLocaleString()}
                </p>
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
};

export default PriceCalculator;
