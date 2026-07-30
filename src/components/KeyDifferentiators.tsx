"use client";

import { FaCheckCircle } from "react-icons/fa";

const differentiators = [
  {
    title: "10:1 Teacher–Student Ratio",
    image: "/assets/img/differentiators/teacher-ratio.jpg",
    color: "bg-[#6552E8]",
    text: "text-white",
    description:
      "Every child receives personalised attention in a warm, nurturing environment.",
    points: [
      "Individual guidance",
      "Learning at their own pace",
      "Strong teacher-child bond",
      "Personal encouragement",
    ],
  },
  {
    title: "Interactive LEGO® Wall",
    image: "/assets/img/differentiators/lego-wall.jpg",
    color: "bg-[#FFD80A]",
    text: "text-slate-900",
    description:
      "Learning through creativity, imagination and hands-on building.",
    points: [
      "Creative thinking",
      "Fine motor skills",
      "Problem solving",
      "Teamwork",
    ],
  },
  {
    title: "Outdoor Learning Space",
    image: "/assets/img/differentiators/outdoor-learning.jpg",
    color: "bg-[#F96321]",
    text: "text-white",
    description:
      "A spacious outdoor environment where movement becomes meaningful learning.",
    points: [
      "Gross motor skills",
      "Confidence",
      "Leadership",
      "Nature exploration",
    ],
  },
  {
    title: "Mud Kitchen",
    image: "/assets/img/differentiators/mud-kitchen.jpg",
    color: "bg-[#00B67A]",
    text: "text-white",
    description:
      "A favourite place where imagination meets sensory exploration.",
    points: [
      "Creativity",
      "Communication",
      "Life skills",
      "Independence",
    ],
  },
  {
    title: "Holistic Hands-on Learning",
    image: "/assets/img/differentiators/holistic-learning.jpg",
    color: "bg-[#46C8FF]",
    text: "text-slate-900",
    description:
      "Helping every child become confident, curious and compassionate.",
    points: [
      "Confidence",
      "Curiosity",
      "Compassion",
      "Lifelong learning",
    ],
  },
];

export default function KeyDifferentiators() {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Decorative blobs */}

      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-yellow-100 blur-3xl opacity-60 max-md:hidden" />
      <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 font-bold text-orange-600">
            Key Differentiators
          </span>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            A Learning Environment
            <br />
            Designed For Every Child
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every space at Kinder Kalp has been thoughtfully designed to
            encourage curiosity, creativity, confidence and joyful learning
            through meaningful experiences.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {differentiators.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[34px] bg-white transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-64 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className={`${item.color} ${item.text} p-8`}>

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 opacity-90">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">

                  {item.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3"
                    >
                      <FaCheckCircle className="shrink-0 text-xl" />
                      <span className="font-medium">
                        {point}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}