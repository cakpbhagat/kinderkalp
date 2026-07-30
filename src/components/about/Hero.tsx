"use client";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#5A50E1] px-6 pb-28 pt-24">

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-white/15 px-6 py-2 font-bold tracking-wide text-white">
            ABOUT KINDER KALP
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-4xl">

            Where Little Minds Dream, Discover & Shine

          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-md leading-5 text-white/90">

            At Kinder Kalp, childhood is celebrated as a journey of curiosity,
            imagination and joyful discovery. We nurture confident learners
            through meaningful experiences that inspire children to explore,
            create and grow every single day.

          </p>

        </div>

        {/* Floating Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-[28px] bg-[#FFD80A] p-8 shadow-xl transition hover:-translate-y-2">

            <div className="text-5xl">🌱</div>

            <h3 className="mt-5 text-2xl font-black text-black">
              Curiosity
            </h3>

            <p className="mt-3 leading-6 text-black">
              Every question is the beginning of a new adventure.
            </p>

          </div>

          <div className="rounded-[28px] bg-[#87ff91] p-8 text-black shadow-xl transition hover:-translate-y-2">

            <div className="text-5xl">🎨</div>

            <h3 className="mt-5 text-2xl font-black">
              Creativity
            </h3>

            <p className="mt-3 leading-6">
              Encouraging children to imagine, build and express freely.
            </p>

          </div>

          <div className="rounded-[28px] bg-[#ffc0c0] p-8 text-black shadow-xl transition hover:-translate-y-2">

            <div className="text-5xl">❤️</div>

            <h3 className="mt-5 text-2xl text-black">
              Compassion
            </h3>

            <p className="mt-3 leading-6">
              Growing kind hearts alongside bright young minds.
            </p>

          </div>

          <div className="rounded-[28px] bg-[#90d8f7] p-8 shadow-xl transition hover:-translate-y-2">

            <div className="text-5xl">🚀</div>

            <h3 className="mt-5 text-2xl font-black text-black">
              Confidence
            </h3>

            <p className="mt-3 leading-6">
              Helping every child believe in themselves from the very beginning.
            </p>

          </div>

        </div>

      </div>

      {/* Bottom Curve */}

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
  );
}