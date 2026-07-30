"use client";

const FEATURES = [
  {
    title: "Learning Through Experience",
    desc: "Children learn best by doing. Our classrooms are filled with hands-on activities, exploration, storytelling, experiments, art, music, movement, and purposeful play.",
    icon: "🎨",
    color: "#FF6F3D",
  },
  {
    title: "Holistic Development",
    desc: "We nurture cognitive, language, physical, emotional, social, and creative development, helping children grow into confident and compassionate individuals.",
    icon: "🌻",
    color: "#1FA97F",
  },
  {
    title: "Strong Language Foundation",
    desc: "Our phonics-based approach develops listening, speaking, reading, and writing skills naturally, building confident communicators from the very beginning.",
    icon: "💬",
    color: "#3EC6FF",
  },
  {
    title: "Safe & Stimulating Environment",
    desc: "Thoughtfully designed learning spaces, age-appropriate resources, and caring educators provide children with a secure environment where they can confidently explore and grow.",
    icon: "🏡",
    color: "#FFC53D",
  },
  {
    title: "Passionate Educators",
    desc: "Our team believes in building meaningful relationships with every child and family, creating a partnership that supports each child's learning journey.",
    icon: "🧑‍🏫",
    color: "#FF6F3D",
  },
  {
    title: "Preparing Children for Life",
    desc: "Beyond academics, we nurture curiosity, resilience, creativity, collaboration, empathy, and problem-solving skills — the qualities children need to thrive in school and beyond.",
    icon: "🚀",
    color: "#1FA97F",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EC] py-8">
      {/* Paper texture, same as Story section */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[420px] w-[420px] rounded-full border border-[#5A50E1]/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rotate-2 items-center rounded-md bg-[#FFC53D] px-4 py-1.5 font-['Nunito'] text-sm font-extrabold tracking-wide text-[#221F2B] shadow-[3px_3px_0_#221F2B]">
            Why Kinder Kalp
          </span>

          <h2 className="mt-7 font-['Baloo_2'] text-5xl font-black leading-[1.1] text-[#221F2B]">
            Why Choose{" "}
            <span className="relative inline-block text-[#5A50E1]">
              Kinder Kalp?
              <svg
                viewBox="0 0 340 18"
                className="absolute -bottom-2 left-0 h-4 w-full"
                fill="none"
              >
                <path
                  d="M2 12C60 2 120 16 180 8C230 2 280 14 338 6"
                  stroke="#FF6F3D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Featured lead card — Child-Centred Learning */}
        <div className="relative mx-auto mt-16 max-w-4xl rounded-[28px] bg-white p-8 shadow-[8px_8px_0_#221F2B] sm:p-10 lg:-rotate-1">
          <div className="absolute -top-3 left-10 h-5 w-16 -rotate-2 rounded-sm bg-[#5A50E1]/20" />
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#5A50E1]/10 text-4xl">
              🧩
            </div>
            <div>
              <h3 className="font-['Baloo_2'] text-2xl font-black text-[#221F2B]">
                Child-Centred Learning
              </h3>
              <p className="mt-2 font-['Nunito'] leading-7 text-[#4A4740]">
                Every child learns differently. We honour individual learning
                styles and pace, ensuring every child feels seen, supported,
                and celebrated.
              </p>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border-t-4 bg-white p-7 shadow-md"
              style={{ borderTopColor: f.color }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl"
                style={{ backgroundColor: `${f.color}20` }}
              >
                {f.icon}
              </div>
              <h4 className="mt-4 font-['Baloo_2'] text-lg font-extrabold text-[#221F2B]">
                {f.title}
              </h4>
              <p className="mt-2 font-['Nunito'] text-[15px] leading-6 text-[#4A4740]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Our Promise — closing panel */}
        <div className="relative mx-auto mt-16 max-w-5xl rounded-[32px] bg-[#221F2B] px-8 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative mx-auto flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl bg-[#FFC53D] text-2xl shadow-[4px_4px_0_rgba(255,255,255,0.15)]">
            ✦
          </div>

          <h3 className="relative mt-6 font-['Baloo_2'] text-3xl font-black text-white sm:text-4xl">
            Our Promise
          </h3>

          <p className="relative mx-auto mt-5 max-w-2xl font-['Nunito'] text-lg leading-8 text-white/75">
            At Kinder Kalp, we don't simply prepare children for the next
            grade — we prepare them for a lifetime of learning. Every smile,
            every question, every discovery, and every milestone is
            celebrated as we help children become{" "}
            <span className="font-bold text-[#FFC53D]">
              confident learners,
            </span>{" "}
            <span className="font-bold text-[#3EC6FF]">
              kind individuals,
            </span>{" "}
            and{" "}
            <span className="font-bold text-[#FF6F3D]">
              joyful explorers
            </span>{" "}
            of the world.
          </p>
        </div>
      </div>
    </section>
  );
}