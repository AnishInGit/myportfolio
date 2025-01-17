import React, { useState } from "react";

const Header = () => {
  // State to manage menu visibility
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to scroll smoothly to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id); // Offset to account for fixed header height
    if (section) {
      const yOffset = -90;
      const yPosition = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 shadow-lg flex justify-between items-center z-50 px-4 py-3 sm:px-6 sm:py-8 lg:py-3 lg:px-10">
      <a
        onClick={() => scrollToSection("home")}
        className="logo text-xl sm:text-4xl lg:text-4xl text-white font-semibold tracking-wide cursor-pointer transition-opacity hover:opacity-90 pr-3"
      >
        Portfolio
      </a>

      {/* Desktop Navigation */}
      <nav className="navbar hidden sm:flex space-x-4 lg:space-x-8 justify-between ">
        {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.toLowerCase())}
            className="text-white text-sm sm:text-2xl lg:text-2xl font-medium transition-transform hover:text-cyan-400 hover:underline"
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        <button
          aria-label="Toggle Menu"
          className="text-white text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 shadow-md flex flex-col items-start px-4 py-2 space-y-2 sm:hidden">
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setMenuOpen(false); // Close the menu after clicking a link
              }}
              className="text-white text-base font-medium w-full text-left transition-transform hover:text-cyan-400 hover:underline"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
