"use client";
import { useEffect } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

import LoganToyHunt from "@/components/sections/LoganToyHunt";
import MysteryMissingKeys from "@/components/sections/MysteryMissingKeys";
import RumiPrint from "@/components/sections/RumiPrint";
import BigBraveSchoolDay from "@/components/sections/BigBraveSchoolDay";

export default function Home() {
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
  return (
    <>
      {/* Navigation */}
      <Navbar />

      <main>
        <Hero />

        <About />

        <LoganToyHunt />

        <MysteryMissingKeys />

        <BigBraveSchoolDay />

        <RumiPrint />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
