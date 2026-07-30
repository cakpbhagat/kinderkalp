import { Check } from "lucide-react";
import { BsArrowRight } from "react-icons/bs";

const points = [
  "Clear and easy admission steps",
  "Friendly guidance for parents",
  "Quick document submission",
  "Flexible visit & counselling",
];

export default function AdmissionSection() {
  return (
    <section className="relative pb-24 overflow-hidden bg-[#fbf9f4]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-8">
          {/* LEFT */}
          <div>
            <span className="inline-flex rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-600">
              Admissions Made Simple
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
              Making Admissions Easy For Every Parent
            </h2>

            <p className="mt-6 max-w-xl text-md leading-6 text-slate-600">
              Our admissions process is designed to be simple, transparent, and
              supportive, giving every parent confidence while enrolling their
              child into a safe, nurturing environment.
            </p>

            <div className="mt-10 grid gap-2 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100">
                    <Check
                      className="h-4 w-4 text-violet-600"
                      strokeWidth={4}
                    />
                  </div>

                  <span className="text-md font-bold text-slate-800">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="my-10 h-px w-full bg-slate-200" />

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

          {/* RIGHT */}
          <div className="relative order-1 flex min-h-[420px] items-center justify-center lg:order-2 lg:min-h-[700px]">
            {/* Main Kids */}

            <img
              src="/assets/img/banner/admission-thumb.png"
              alt="Kids"
              className="
    relative
    z-[99]
    w-[85%]
    sm:w-[80%]
    lg:w-[120%]
    lg:max-w-none
  "
            />

            {/* Decorations */}

            <img
              src="/assets/img/element/star-outline.png"
              alt=""
              className="absolute -top-2 right-0 w-16 animate-pulse"
            />

            <img
              src="/assets/img/element/purple-splash.png"
              alt=""
              className="absolute right-0 top-40 w-28"
            />

            <img
              src="/assets/img/element/balloons.png"
              alt=""
              className="absolute bottom-0 right-2 w-36"
            />

            {/* Floating circles */}

            <div className="absolute left-8 top-24 h-5 w-5 rounded-full border-2 border-violet-500" />

            <div className="absolute left-20 top-48 h-7 w-7 rounded-full bg-violet-500" />
          </div>
        </div>
      </div>

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
            fill="#5a50e1"
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
