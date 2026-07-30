"use client";

import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO:
    // Connect EmailJS / Formspree / Backend API here

    setFormSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-[#fbf9f4] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[3fr_2fr]">
        {/* Left */}

        <div>
          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-bold text-violet-600">
            Get In Touch
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Have Any Queries?
            <br />
            We'd Love To Help
          </h2>

          {formSubmitted && (
            <div className="mt-8 rounded-3xl bg-green-100 p-5 font-semibold text-green-700">
              ✓ Thank you for reaching out! Our team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleFormSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Your Name"
                required
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 outline-none transition focus:border-[#6552E8]"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email Address"
                required
                className="rounded-2xl border border-slate-200 bg-white px-6 py-4 outline-none transition focus:border-[#6552E8]"
              />
            </div>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 outline-none transition focus:border-[#6552E8]"
            />

            <textarea
              rows={2}
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Type your message..."
              required
              className="w-full rounded-2xl border border-slate-200 bg-white px-6 py-4 outline-none transition focus:border-[#6552E8]"
            />

            <button
              type="submit"
              className="rounded-2xl bg-[#f96321] px-8 py-4 font-bold text-white transition hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right */}

        <div className="rounded-[40px] bg-[#6552E8] p-10 text-white">
          <h3 className="text-3xl font-black">Contact Information</h3>

          <p className="mt-3 text-white/80">
            We'd love to hear from you. Reach out to us anytime!
          </p>

          <div className="mt-10 space-y-8">
            {/* Phone */}

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <FaPhoneAlt />
              </div>

              <div>
                <h4 className="text-xl font-bold">Call Us</h4>

                <a
                  href="tel:+916355269363"
                  className="mt-1 block text-lg text-white/90 hover:text-[#FFD54A]"
                >
                  +91 63552 69363
                </a>
              </div>
            </div>

            {/* Address */}

            {/* Address */}

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <FaMapMarkerAlt className="text-xl" />
              </div>

              <div>
                <h4 className="text-xl font-bold">Our Address</h4>

                <p className="mt-1 leading-7 text-white/90">
                  Kinder Kalp Preschool & Daycare, Opp. Tuli Hospital, Ram
                  Chowk, Ghod Dod Road, Surat – 395001
                </p>
              </div>
            </div>

            {/* Instagram */}

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <FaInstagram />
              </div>

              <div>
                <h4 className="text-xl font-bold">Instagram</h4>

                <a
                  href="https://instagram.com/kinderkalpofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg text-white/90 hover:text-[#FFD54A]"
                >
                  @kinderkalpofficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
