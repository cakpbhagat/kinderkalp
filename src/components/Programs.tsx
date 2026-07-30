const programs = [
  {
    age: "2 - 3 Years",
    title: "Preschool",
    description:
      "Nurturing toddler curiosity with early sensory learning and interactive experiences.",
    image: "/assets/img/icon/program-icon1.png",
    color: "p-pink",
    alt: "Preschool Icon",
  },
  {
    age: "3 - 5 Years",
    title: "Kindergarten",
    description:
      "Comprehensive school preparation focusing on social, logic, and motor skills.",
    image: "/assets/img/icon/program-icon2.png",
    color: "p-yellow",
    alt: "Kindergarten Icon",
  },
  {
    age: "6 Months - 12 Years",
    title: "Cuddle Cove",
    description:
      "Safe daycare with engaging activities, caring supervision, and joyful learning experiences.",
    image: "/assets/img/icon/program-icon3.png",
    color: "p-green",
    alt: "Cuddle Cove Icon",
  },
  {
    age: "5 - 12 Years",
    title: "After School",
    description:
      "Enriching extracurricular classes, homework guidance, and creative workshops.",
    image: "/assets/img/icon/program-icon4.png",
    color: "p-blue",
    alt: "After School Icon",
  },
];

export default function ProgramsSection() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-20"
      style={{ backgroundColor: "var(--bg-cream)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9BFAE 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Heading */}
      <div className="mx-auto mb-10 max-w-4xl px-5 text-center sm:mb-14 lg:mb-16">
        <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-700 sm:px-5 sm:text-sm">
          Our Programs
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Growing Together,
          <br />
          Every Step Of The Way
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          Our thoughtfully designed programs support children through every
          stage of early development, helping them grow with confidence,
          creativity and curiosity.
        </p>
      </div>

      <div className="container relative">
        {/* Decorative Elements */}
        <div className="">
          <img
            src="/assets/img/element/sun-fun.png"
            alt="Lightbulb Doodle"
            className="doodle -bottom-24 -left-10 width-[200px] float-item-rev hidden lg:block max-lg:hidden"
          />

          <img
            src="/assets/img/element/admission-play.png"
            alt="Sun Doodle"
            className="doodle -top-36 -right-20 width-[150px] float-item hidden lg:block max-lg:hidden"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.title}
              className={`program-card ${program.color} mx-auto w-full max-w-sm`}
            >
              <div className="program-icon-wrapper">
                <img
                  src={program.image}
                  alt={program.alt}
                  className="h-16 w-16 sm:h-20 sm:w-20"
                />
              </div>

              <span className="program-age text-sm sm:text-base">
                {program.age}
              </span>

              <h3 className="program-name text-xl sm:text-2xl">
                {program.title}
              </h3>

              <p className="program-desc text-sm leading-6 sm:text-base">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
