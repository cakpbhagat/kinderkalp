"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    q: "What age group do you accept?",
    a: "We welcome children from Playgroup through Pre-Primary, typically between 1.5 and 6 years old of age. Reach out to us and we'll help you find the right program for your child's age and stage of development.",
  },
  {
    q: "Can we schedule a trial class before enrolling?",
    a: "Yes! We warmly welcome families to visit us and experience a trial session, so that both you and your child can get a feel for our classrooms and experience our learning environment before making a decision.",
  },
  {
    q: "When do admissions open?",
    a: "Admissions typically open between February and June, but seats are offered on a rolling basis. Contact us anytime to check current availability.",
  },
  {
    q: "Do you provide transportation?",
    a: "Transportation availability depends on your location. Message us your address on WhatsApp and we'll confirm whether pickup and drop are possible.",
  },
  {
    q: "What is your teacher-to-child ratio?",
    a: "We keep our class sizes intentionally small, with dedicated caregivers for every group, so each child gets personalized attention throughout the day.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#fbf9f4] pb-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="inline-flex rotate-2 items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-bold text-orange-600">
            Common Questions
          </span>
          <h2 className="mt-5 text-4xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <FaChevronDown
                    className={`shrink-0 text-[#6552E8] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 leading-7 text-slate-600">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}