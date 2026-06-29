import { useState } from "react";
import {
  FaBagShopping,
  FaBars,
  FaXmark,
  FaChevronDown,
} from "react-icons/fa6";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-black text-white px-5 md:px-20 h-16">
        <h1 className="text-xl font-bold">ChairHouse</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="relative">
            <select className="bg-transparent outline-none cursor-pointer appearance-none pr-3">
              <option className="text-black">Furniture</option>
              <option className="text-black">Categories</option>
            </select>

            <FaChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-sm pointer-events-none" />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <FaBagShopping className="text-xl cursor-pointer" />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black text-white flex flex-col items-center justify-center gap-10 transition-all duration-300 ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <select
          className="bg-transparent border border-white rounded-md px-4 py-2 outline-none"
          onChange={() => setMenuOpen(false)}
        >
          <option className="text-black">Furniture</option>
          <option className="text-black">Categories</option>
        </select>

        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-lg hover:text-gray-300 transition"
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Nav;