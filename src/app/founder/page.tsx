"use client";
import AboutHero from "@/components/about/Hero";
import AboutStory from "@/components/about/Story";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import OurFounder from "@/components/founder/Main";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative">
      <TopBar />
      <header
        className={`px-5 md:px-8 xl:px-10 header ${isSticky ? "sticky" : ""}`}
      >
        <div className="container nav-container">
          <a href="/">
            <Image
              src={"/assets/img/logo/logo.png"}
              alt="KinderKalp"
              className="max-md:h-24 max-md:w-24"
              width={100}
              height={50}
            />
          </a>

          <ul className="nav-menu lg:flex">
            <li>
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/founder" className="nav-link">
                Our Founder
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-cta hidden lg:block">
            <a href="/contact">
              <button className="cursor-pointer group flex items-center gap-5 rounded-2xl bg-[#f96321] pl-6 px-1 py-2 transition hover:scale-105">
                <span className="text-sm font-bold uppercase tracking-wide text-white">
                  Start Enrollment
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                  <BsArrowRight
                    className="transition group-hover:translate-x-1"
                    strokeWidth={3}
                  />
                </span>
              </button>
            </a>
          </div>

          <button
            className="nav-toggle lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[9998] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Sheet */}
      <div
        className={`fixed top-0 right-0 z-[9999] h-screen w-[320px] bg-white shadow-2xl transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b p-6">
          <button onClick={() => setIsMenuOpen(false)} className="text-3xl">
            ×
          </button>
        </div>

        <ul className="flex flex-col p-6 text-lg font-semibold">
          {["Home", "About", "Founder", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`${item === "Home" ? "/" : item.toLowerCase()}`}
                className="block border-b py-4 hover:text-orange-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="p-6">
          <a href="/contact">
            <button className="cursor-pointer group flex items-center gap-5 rounded-2xl bg-[#f96321] pl-6 px-1 py-2 transition hover:scale-105">
              <span className="text-sm font-bold uppercase tracking-wide text-white">
                Start Enrollment
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <BsArrowRight
                  className="transition group-hover:translate-x-1"
                  strokeWidth={3}
                />
              </span>
            </button>
          </a>
        </div>
      </div>

      <OurFounder />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default About;
