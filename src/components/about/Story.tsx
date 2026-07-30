"use client";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EC] py-28">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Nunito:wght@400;600;700;800&display=swap"
      />

      {/* Paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#5A50E1]/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        {/* LEFT */}
        <div>
          <span className="inline-flex -rotate-2 items-center rounded-md bg-[#FFC53D] px-4 py-1.5 font-['Nunito'] text-sm font-extrabold tracking-wide text-[#221F2B] shadow-[3px_3px_0_#221F2B]">
            Our Story
          </span>

          <h2 className="mt-7 font-['Baloo_2'] text-5xl font-black leading-[1.1] text-[#221F2B]">
            More Than A Preschool,
            <span className="relative mt-1 inline-block text-[#5A50E1]">
              A Place To Belong
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

          <p className="mt-9 font-['Nunito'] text-lg leading-8 text-[#4A4740]">
            At Kinder Kalp, we believe childhood is a beautiful journey of
            wonder, curiosity and endless possibilities. More than a
            preschool, we're a nurturing community where children feel safe,
            valued and inspired to explore the world around them.
          </p>

          <p className="mt-5 font-['Nunito'] text-lg leading-8 text-[#4A4740]">
            Guided by our philosophy of{" "}
            <span className="font-bold text-[#FF6F3D]">
              &ldquo;Nurturing Young Minds to Shine,&rdquo;
            </span>{" "}
            we create joyful learning experiences that encourage children to
            think creatively, ask questions, solve problems and build
            confidence from an early age.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative mt-4 lg:mt-0 lg:mx-6">
          

          {/* Desktop: faint trail sits behind the card, only visible in the margins */}
          <svg
            viewBox="0 0 500 460"
            preserveAspectRatio="none"
            className="pointer-events-none absolute -inset-16 hidden lg:block"
          >
            <path
              d="M40,60 C160,20 260,40 250,120 C240,200 380,260 460,400"
              fill="none"
              stroke="#221F2B"
              strokeOpacity="0.2"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="1 12"
            />
          </svg>

          {/* Card — normal flow, sized by its own content */}
          <div className="relative rounded-[28px] bg-white p-12 shadow-[8px_8px_0_#221F2B] lg:-rotate-1">
            

            <h3 className="mt-5 font-['Baloo_2'] text-3xl font-black text-[#221F2B]">
              Nurturing
              <span className="text-[#FF6F3D]"> Head,</span>
              <span className="text-[#1FA97F]"> Heart</span> &
              <span className="text-[#3EC6FF]"> Hands</span>
            </h3>

            <p className="mt-4 font-['Nunito'] leading-7 text-[#4A4740]">
              Every learning experience is thoughtfully designed to develop
              intellectual curiosity, emotional well-being and practical life
              skills — so children flourish thinking independently,
              expressing themselves confidently, and learning through
              meaningful experiences.
            </p>
          </div>

          {/* Desktop: stamps clipped to the card's corners only, never over text */}
          <div className="absolute -left-8 -top-8 hidden -rotate-6 rounded-2xl bg-[#FFC53D] px-6 py-4 shadow-[5px_5px_0_#221F2B] lg:block">
            <div className="absolute -top-3 left-5 h-4 w-12 -rotate-3 rounded-sm bg-[#5A50E1]/20" />
            <div className="text-3xl">🌱</div>
            <h4 className="mt-1 font-['Baloo_2'] text-lg font-extrabold text-[#221F2B]">
              Curiosity
            </h4>
          </div>

          <div className="absolute -bottom-8 -right-6 hidden rotate-[5deg] rounded-2xl bg-[#FF6F3D] px-6 py-4 text-white shadow-[5px_5px_0_#221F2B] lg:block">
            <div className="absolute -top-3 left-5 h-4 w-12 rotate-2 rounded-sm bg-white/25" />
            <div className="text-3xl">✨</div>
            <h4 className="mt-2 font-['Baloo_2'] text-lg font-extrabold">
              Joyful Learning
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}