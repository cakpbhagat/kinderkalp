"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import { BsArrowRight } from "react-icons/bs";
import ProgramsSection from "@/components/Programs";
import AdmissionSection from "@/components/AdmissionSection";
import ClassesSection from "@/components/ClassesSection";
import WhyChooseSection from "@/components/WhyChooseUsSection";
import Footer from "@/components/Footer";
import KeyDifferentiators from "@/components/KeyDifferentiators";
import ContactSection from "@/components/ContactSection";

// Inline SVG Icons for premium performance and no external dependency overhead
const Icons = {
  MapPin: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  ),
  Clock: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  Calendar: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  User: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Comment: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  ),
  Star: ({ filled }: { filled: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  ),
  ArrowRight: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  Phone: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Mail: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  ),
  GraduationCap: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
    </svg>
  ),
  Users: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  School: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
      <rect x="6" y="12" width="12" height="8"></rect>
    </svg>
  ),
  Trophy: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
      <path d="M4 22h16"></path>
      <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"></path>
      <path d="M12 2a6 6 0 0 1 6 6v3.5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"></path>
    </svg>
  ),
};

export default function Home() {
  // Sticky Navbar State
  const [isSticky, setIsSticky] = useState(false);

  // Testimonial Carousel State
  const [activeSlide, setActiveSlide] = useState(0);

  // Progress Bar Animation State
  const [animateProgress, setAnimateProgress] = useState(false);

  // Contact Form Feedback States
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Trigger progress bar animations when section is in view
      const whySection = document.getElementById("why-choose-us");
      if (whySection) {
        const rect = whySection.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setAnimateProgress(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      {/* 1. Header / Navigation Bar */}
      <header
        className={`px-5 md:px-8 xl:px-10 header ${isSticky ? "sticky" : ""}`}
      >
        <div className="container nav-container">
          <a href="/">
            <Image
              src={"/assets/img/logo/logo.png"}
              alt="KinderKalp"
              className="max-md:h-24 max-md:w-20"
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
                href={`${item === "Home" ? "" : item.toLowerCase()}`}
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

      {/* 2. Hero Section */}
      <section className="hero-section">
        <div className="container hero-layout">
          <div className="hero-content">
            <span className="hero-badge">Enroll Your Child Today</span>
            <h1 className="hero-title">
              Give Your Child the Best Start in Life – Enroll Today!
            </h1>
            <p className="hero-description">
              Every child is unique and we believe in nurturing their curiosity
              and individual talents in a playful, supportive, and creative
              environment.
            </p>

            <div className="hero-buttons">
              <a href="/contact">
                <button className="cursor-pointer group flex items-center gap-5 rounded-2xl bg-[#f96321] pl-6 px-1 py-2 transition hover:scale-105">
                  <span className="text-sm font-bold uppercase tracking-wide text-white">
                    Start Enrollment
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <BsArrowRight
                      className="text-black transition group-hover:translate-x-1"
                      strokeWidth={3}
                    />
                  </span>
                </button>
              </a>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <div className="hero-bg-circle"></div>
            <img
              src="/assets/img/banner/hero-thumb.png"
              alt="Happy child reading"
              className="hero-thumb"
            />

            {/* Playful Floating Doodles */}
            <img
              src="/assets/img/element/babol-parasut.png"
              alt="Lightbulb Doodle"
              className="doodle doodle-book float-item-rev"
            />
            <img
              src="/assets/img/element/hero-flash.png"
              alt="Lightbulb Doodle"
              className="doodle doodle-bulb float-item-rev"
            />
            <img
              src="/assets/img/element/car-hero.png"
              alt="Sun Doodle"
              className="doodle doodle-sun-fun float-item max-lg:hidden"
            />
          </div>
        </div>

        {/* Bottom stacked curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50">
          <svg
            viewBox="0 0 1440 170"
            preserveAspectRatio="none"
            className="block w-full h-32.5"
          >
            <path
              fill="#433ab8"
              d="
          M0,90
          C220,170 420,0 720,90
          C980,165 1220,20 1440,90
          L1440,170
          L0,170
          Z
        "
            />

            <path
              fill="#fbf9f4"
              opacity="1"
              d="
          M0,120
          C250,190 470,50 720,120
          C980,185 1200,70 1440,120
          L1440,170
          L0,170
          Z
        "
            />
          </svg>
        </div>
      </section>

      {/* 3. Program Section */}
      <ProgramsSection />

      {/* 4. Admissions Section */}
      <AdmissionSection />

      {/* 6. Why Choose Us Section */}
      <WhyChooseSection />
      <KeyDifferentiators />

      {/* 10. Quick Contact & Form Section */}
      <ContactSection />

      {/* 13. Footer Section */}
      <Footer />
    </>
  );
}
