"use client";
import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

import MysteryMissingKeys from "@/components/sections/MysteryMissingKeys";
import RumiPrint from "@/components/sections/RumiPrint";
import BigBraveSchoolDay from "@/components/sections/BigBraveSchoolDay";

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 300) { // or any threshold
      if (typeof window.gtag === "function") {
        window.gtag("event", "scroll_depth_300px");
      }
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
}, []);

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Home Section */}
        <Hero />

        <MysteryMissingKeys />

        <RumiPrint />

        <BigBraveSchoolDay />

        {/* About Us Section */}
        <About />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
