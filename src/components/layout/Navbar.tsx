"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "mystery", "rumi", "school", "about", "book"];
const displayNames: Record<string, string> = {
  home: "Home",
  mystery: "Mystery",
  rumi: "Rumi",
  school: "School",
  about: "About",
  book: "Book A Story",
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Check the active section on page load
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    // On load, check the URL hash and set the active section
    const initialSection = window.location.hash.substring(1) || "home";
    if (sections.includes(initialSection)) {
      setActiveSection(initialSection);

      // Scroll to the initial section only if it's not already in view
      const element = document.getElementById(initialSection);
      if (element) {
        const rect = element.getBoundingClientRect();

        // Check if the section is already in view
        const isInView = rect.top >= 0 && rect.top <= window.innerHeight;

        // If it's not in view, scroll to it
        if (!isInView) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white px-3 sm:px-0 z-50 text-[var(--brand-blue)] uppercase text-xs">
      <div className="container mx-auto flex justify-between items-center">

        <div className="relative w-60 h-16">
          <Image
            src="/Logo.svg"
            alt="Pixel Keepsakes Logo"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-[var(--brand-blue)] hover:text-[var(--brand-blue)] font-bold tracking-wide transition duration-300 relative group ${activeSection === section ? "text-[var(--brand-orange)]" : ""
                }`}
            >
              {displayNames[section]}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--brand-orange)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        {/* Animated Hamburger Icon */}
        <button
          className="md:hidden relative z-20 w-8 h-4 p-0 flex flex-col justify-between items-center group"
          onClick={toggleMenu}
        >
          <div
            className={`h-0.75 w-8 bg-[var(--brand-blue)] rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <div
            className={`h-0.75 w-8 bg-[var(--brand-blue)] rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <div
            className={`h-0.75 w-8 bg-[var(--brand-blue)] rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-screen h-screen bg-[var(--brand-orange)] bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-bold"
          >
            {sections.map((section, index) => (
              <motion.a
                key={`${index}`}
                href={`#${section}`}
                onClick={closeMenu}
                initial={{ opacity: 0 }} // Always starts invisible
                animate={{ opacity: 1 }} // Fade in to full opacity
                exit={{ opacity: 0 }} // Fade out when exiting
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="hover:text-[var(--brand-blue)]"
              >
                {displayNames[section]}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
