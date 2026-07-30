"use client";

import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const skills = [
  {
    title: "Creativity",
    value: 100,
    bg: "bg-[#ff5447]",
    text: "text-white",
  },
  {
    title: "Experiences",
    value: 100,
    bg: "bg-[#FFD80A]",
    text: "text-slate-900",
  },
];

export default function WhyChooseSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.3 },
    );

    const el = document.getElementById("why-section");

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="why-section"
      className="relative overflow-hidden bg-[#5a50e1] py-20 lg:py-12 lg:pb-48 pb-32"
    >
      <img
        src="/assets/img/element/babol-parasut.png"
        alt="Lightbulb Doodle"
        className="doodle doodle-parasut float-item-rev max-lg:hidden"
      />
      <img
        src="/assets/img/element/event-pen-epe.png"
        alt="Sun Doodle"
        className="doodle doodle-event-pen-epe float-item max-lg:hidden"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[6fr_5fr]">
        {/* IMAGE */}

        <div className="relative flex justify-center">
          {/* yellow outline */}

          <div className="absolute inset-8 rounded-[80px] border-[5px] border-yellow-400" />

          {/* main image */}

          <div className="relative overflow-hidden rounded-[80px]">
            <img
              src="/assets/img/banner/choose-exprience.png"
              alt=""
              className="w-full max-w-[650px] object-cover"
            />
          </div>

          {/* rainbow */}

          <img
            src="/assets/img/element/rainbow.png"
            className="absolute bottom-6 right-8 w-40"
            alt=""
          />

          {/* kite */}

          <img
            src="/assets/img/element/kite.png"
            className="absolute -bottom-10 -left-8 w-36"
            alt=""
          />

          {/* flower */}

          <img
            src="/assets/img/element/flower.png"
            className="absolute -top-3 right-8 w-16"
            alt=""
          />

          {/* alphabet */}

          <img
            src="/assets/img/element/abc-block.png"
            className="absolute left-0 top-4 w-20"
            alt=""
          />
        </div>

        {/* CONTENT */}

        <div>
          <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-bold text-violet-600">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl lg:text-5xl">
            {" "}
            Why Our Kindergarten
            <br />
            Stands Out
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white">
            {" "}
            Our admissions process is designed to be simple, transparent and
            supportive, giving every parent complete confidence.
          </p>

          <div className="mt-8 space-y-4">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className={`${skill.bg} ${skill.text} overflow-hidden rounded-[26px]`}
              >
                <div className="flex items-center justify-between px-6 py-3.5">
                  <h3 className="text-lg font-bold">{skill.title}</h3>

                  <span className="text-3xl font-extrabold">
                    {animate ? `${skill.value}%` : "0%"}
                  </span>
                </div>

                <div className="h-2 w-full bg-black/10">
                  <div
                    className="h-full rounded-full bg-white/80 transition-all duration-1000"
                    style={{
                      width: animate ? `${skill.value}%` : 0,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a href="/contact">
            <button className="mt-4 cursor-pointer group flex items-center gap-5 rounded-2xl bg-[#f96321] pl-6 px-1 py-2 transition hover:scale-105">
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
      {/* Bottom stacked curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-50">
        <svg
          viewBox="0 0 1440 170"
          preserveAspectRatio="none"
          className="block w-full h-32.5"
        >
          <path
            fill="#fff"
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
            fill="#fff"
            opacity="0.55"
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
  );
}
