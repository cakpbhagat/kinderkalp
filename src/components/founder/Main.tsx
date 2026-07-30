"use client";

const CREDENTIALS = [
  { label: "12+ Years Teaching Experience", icon: "🎓", color: "#5A50E1" },
  { label: "B.Com., B.Ed.", icon: "📚", color: "#FF6F3D" },
  { label: "Surat's Leading Institutions", icon: "🏫", color: "#1FA97F" },
];

const STORY_BLOCKS = [
  {
    label: "Her Philosophy",
    icon: "🌼",
    color: "#5A50E1",
    text: "Her educational philosophy is built on the belief that children learn best through curiosity, exploration, meaningful experiences, and joyful discovery. This vision inspired the creation of Kinder Kalp, a place where every child is encouraged to think independently, express creatively, and grow with confidence.",
  },
  {
    label: "Her Approach",
    icon: "🎨",
    color: "#FF6F3D",
    text: "As the Chief Learning Architect, Krishna carefully designs learning experiences that go beyond conventional teaching. By blending play-based learning, hands-on exploration, and globally inspired educational practices, she ensures that every child develops academically, socially, emotionally, and creatively in a warm, nurturing environment.",
  },
  {
    label: "Lifelong Learning",
    icon: "🌱",
    color: "#1FA97F",
    text: "A firm believer in lifelong learning, Krishna continually explores emerging educational approaches, attends professional development programs, and embraces innovative ideas to provide children with the very best start to their learning journey.",
  },
  {
    label: "Her Vision",
    icon: "🌟",
    color: "#3EC6FF",
    text: "Her vision for Kinder Kalp is to create a school where childhood is celebrated, individuality is respected, and learning becomes an inspiring adventure — laying a strong foundation for confident, compassionate, and lifelong learners.",
  },
];

export default function OurFounder() {
  return (
    <main className="relative overflow-hidden bg-[#FBF6EC]">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap"
      />

      {/* Paper texture, consistent across the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#5A50E1]/10" />
      <div className="pointer-events-none absolute -left-24 bottom-24 h-[380px] w-[380px] rounded-full border border-[#FF6F3D]/10" />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex -rotate-2 items-center rounded-md bg-[#FFC53D] px-4 py-1.5 font-['Nunito'] text-sm font-extrabold tracking-wide text-[#221F2B] shadow-[3px_3px_0_#221F2B]">
            Meet Our Founder
          </span>
          <h1 className="mt-7 font-['Baloo_2'] text-4xl font-black leading-[1.15] text-[#221F2B] sm:text-5xl">
            Meet Our Founder &amp;
            <span className="relative mt-1 inline-block text-[#5A50E1]">
              {" "}Chief Learning Architect
              <svg
                viewBox="0 0 420 18"
                className="absolute -bottom-2 left-0 h-4 w-full"
                fill="none"
              >
                <path
                  d="M2 12C80 2 160 16 220 8C280 2 350 14 418 6"
                  stroke="#FF6F3D"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>

        <div className="relative mt-16 grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Photo card */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div className="absolute -top-4 left-10 z-10 h-6 w-20 -rotate-3 rounded-sm bg-[#5A50E1]/20" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border-2 border-dashed border-[#221F2B]/15 bg-gradient-to-br from-[#5A50E1]/10 via-[#FFC53D]/10 to-[#FF6F3D]/10 shadow-[8px_8px_0_#221F2B]">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
                <div className="text-6xl">👩‍🏫</div>
                <p className="font-['Nunito'] text-sm font-bold text-[#221F2B]/50">
                  Add founder photo here
                </p>
              </div>
            </div>

            {/* Sticker badge on the photo */}
            <div className="absolute -bottom-6 -right-6 rotate-6 rounded-2xl bg-[#FF6F3D] px-5 py-3 text-white shadow-[5px_5px_0_#221F2B]">
              <p className="font-['Baloo_2'] text-sm font-extrabold leading-tight">
                Founder &amp;<br />Chief Learning
                <br />Architect
              </p>
            </div>
          </div>

          {/* Intro */}
          <div>
            <h2 className="font-['Baloo_2'] text-4xl font-black text-[#221F2B]">
              Krishna Bhagat
            </h2>
            <p className="mt-1 font-['Nunito'] text-lg font-bold text-[#5A50E1]">
              B.Com., B.Ed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md"
                >
                  <span className="text-lg">{c.icon}</span>
                  <span
                    className="font-['Nunito'] text-sm font-bold"
                    style={{ color: c.color }}
                  >
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 font-['Nunito'] text-lg leading-8 text-[#4A4740]">
              Education is more than a profession for Krishna — it is
              a lifelong passion and purpose. With over 12 years of teaching
              experience, she has been associated with some of Surat's
              leading educational institutions, where she gained extensive
              experience in nurturing young learners and creating enriching
              classroom experiences.
            </p>
          </div>
        </div>
      </section>

      {/* STORY BLOCKS */}
      <section className="relative mx-auto max-w-5xl px-6 py-24">
        <div className="flex flex-col gap-10">
          {STORY_BLOCKS.map((block) => (
            <div
              key={block.label}
              className="flex flex-col gap-4 rounded-3xl border-l-4 bg-white p-8 shadow-md sm:flex-row sm:gap-7"
              style={{ borderLeftColor: block.color }}
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl"
                style={{ backgroundColor: `${block.color}1A` }}
              >
                {block.icon}
              </div>
              <div>
                <span
                  className="font-['Baloo_2'] text-lg font-extrabold"
                  style={{ color: block.color }}
                >
                  {block.label}
                </span>
                <p className="mt-2 font-['Nunito'] text-[17px] leading-8 text-[#4A4740]">
                  {block.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING QUOTE PANEL */}
      <section className="relative mx-auto max-w-5xl px-6 pb-28">
        <div className="relative rounded-[32px] bg-[#221F2B] px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute inset-0 rounded-[32px] opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #FFFFFF 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <div className="relative mx-auto flex h-14 w-14 -rotate-6 items-center justify-center rounded-2xl bg-[#FFC53D] text-3xl font-['Baloo_2'] font-black text-[#221F2B] shadow-[4px_4px_0_rgba(255,255,255,0.15)]">
            &ldquo;
          </div>

          <p className="relative mx-auto mt-8 max-w-3xl font-['Baloo_2'] text-2xl font-bold leading-snug text-white sm:text-3xl">
            Every child deserves a learning environment that inspires
            curiosity, celebrates individuality, and nurtures the confidence
            to shine.
          </p>

          <p className="relative mt-7 font-['Nunito'] text-sm font-bold uppercase tracking-wide text-[#FFC53D]">
            — Krishna Bhagat, Founder &amp; Chief Learning Architect
          </p>
        </div>
      </section>
    </main>
  );
}