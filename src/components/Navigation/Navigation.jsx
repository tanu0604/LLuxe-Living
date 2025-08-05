import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import navLogo from "../../assets/logo.jpg";
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Price Calculator", href: "/calculator" },
  { name: "Form", href: "/form" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={navLogo} alt="LLuxe Living" className="w-14 h-14 rounded-full" />
          <Link to="/" className="text-2xl font-bold text-white tracking-wide">
            LLuxe<span className="text-gray-300">Living</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-white transition duration-300 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-all"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-lg shadow-md p-6 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-gray-300 hover:text-white text-base font-medium transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
