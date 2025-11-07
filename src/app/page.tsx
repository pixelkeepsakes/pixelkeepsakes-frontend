"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Home";
import Technology from "@/components/sections/Technology";
import About from "@/components/sections/About";
import Investors from "@/components/sections/Investors";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Home Section */}
        <Hero />

        {/* Technology Section */}
        <Technology />

        {/* About Us Section */}
        <About />

        {/* Investors Section */}
        <Investors />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
