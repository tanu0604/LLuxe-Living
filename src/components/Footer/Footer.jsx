import { Link } from "react-router-dom";
import footerLogo from "../../assets/logo.jpg";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div className="flex flex-col items-center space-x-4">
          <img
            src={footerLogo}
            alt="LLuxe Living"
            className="w-20 h-auto object-contain rounded-full"
          />
          <Link
            to="/"
            className="text-2xl font-bold text-white tracking-wide leading-tight"
          >
            LLuxe<span className="text-gray-300">Living</span>
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/calculator" className="hover:text-white transition">Price Calculator</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition">Gallery</Link></li>
            <li><Link to="/form" className="hover:text-white transition">Form</Link></li>
          </ul>
        </div>

        {/* Contact & Location */}
        <div>
          <h3 className="text-lg font-medium text-white">Contact</h3>
          <div className="mt-4 text-sm space-y-2 text-gray-400">
            <p className="flex items-center gap-2">
              <Phone size={18} /> <a href="tel:+918420906352" className="hover:text-white">+91 84209 06352</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> <a href="tel:+919558214868" className="hover:text-white">+91 95582 14868</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} /> <a href="tel:+917439186072" className="hover:text-white">+91 74391 86072</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} /> <a href="mailto:saleslluxeliving@gmail.com" className="hover:text-white">saleslluxeliving@gmail.com</a>
            </p>
            <p>
              📍 2/35, Samajgarh Park, near Samajgarh Park,<br />
              Bijoygarh, Azadgarh, Kolkata, West Bengal 700040
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 py-4 border-t border-gray-800 text-sm">
        © {new Date().getFullYear()} LLuxe Living. All rights reserved.
      </div>
    </footer>
  );
}
