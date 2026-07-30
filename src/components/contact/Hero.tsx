"use client";

import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

const QUICK_LINKS = [
  {
    label: "Call",
    value: "+91 63552 69363",
    href: "tel:+916355269363",
    icon: FaPhoneAlt,
    color: "#6552E8",
  },
  {
    label: "WhatsApp",
    value: "Message us",
    href: "https://wa.me/916355269363",
    icon: FaWhatsapp,
    color: "#1FA97F",
  },
  {
    label: "Instagram",
    value: "@kinderkalpofficial",
    href: "https://instagram.com/kinderkalpofficial",
    icon: FaInstagram,
    color: "#F96321",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf9f4] pt-28 pb-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full border border-[#6552E8]/10" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex -rotate-2 items-center rounded-full bg-violet-100 px-5 py-2 text-sm font-bold text-violet-600">
          We&apos;d Love To Hear From You
        </span>

        <h1 className="mt-6 text-5xl font-black leading-[1.1] text-slate-900">
          Let&apos;s Talk About Your
          <span className="block text-[#6552E8]">Child&apos;s Journey</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Whether you have a question about admissions, want to schedule a
          visit, or just want to say hello — our team is ready to help.
        </p>

        {/* Quick contact chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-3.5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                  style={{
                    backgroundColor: `${link.color}1A`,
                    color: link.color,
                  }}
                >
                  <Icon />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wide text-slate-400">
                    {link.label}
                  </span>
                  <span className="block text-sm font-bold text-slate-900">
                    {link.value}
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}