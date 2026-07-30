import { ArrowRight, MapPin, Star, Users } from "lucide-react";

const classes = [
  {
    title: "Creative Drawing & Painting",
    age: "2 - 3 Years",
    location: "Creative Studio",
    image: "/assets/img/blog/course-2.png",
    color: "from-pink-500 to-orange-400",
  },
  {
    title: "Outdoor Sports & Activities",
    age: "3 - 5 Years",
    location: "Outdoor Arena",
    image: "/assets/img/blog/course-8.png",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Music & Rhythm for Toddlers",
    age: "1.5 - 2 Years",
    location: "Music Room",
    image: "/assets/img/blog/program-details-big.png",
    color: "from-sky-400 to-cyan-500",
  },
];

export default function ClassesSection() {
  return (
    <section id="classes" className="bg-[#5a50e1] pt-12 lg:pb-48 relative">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mx-auto mb-16 max-w-7xl text-center">
          <span className="rounded-full bg-gray-100 px-5 py-2 text-sm font-bold text-violet-600">
            Our Classes
          </span>

          <h2 className="text-4xl lg:text-5xl mt-4 text-white">
            Discover Our Learning Programs
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {classes.map((item) => (
            <div
  key={item.title}
  style={{
    backgroundImage: "url('/assets/img/element/cources-bg-ele.png')",
  }}
  className="relative aspect-[0.82] bg-contain bg-center bg-no-repeat flex flex-col"
>
  {/* Image */}
  <div className="overflow-hidden rounded-2xl">
    <img
      src={item.image}
      alt={item.title}
      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>

  {/* Body */}
  <div className="mt-4 flex flex-1 flex-col px-6 py-10">
    <div className="flex items-center gap-6 text-[15px] text-gray-500">
      <div className="flex items-center gap-2">
        <Users size={16} className="text-[#f96321]" />
        {item.age}
      </div>

      <div className="flex items-center gap-2">
        <MapPin size={16} className="text-[#f96321]" />
        {item.location}
      </div>
    </div>

    <h3 className="mt-3 text-2xl font-black leading-tight text-[#17153a]">
      {item.title}
    </h3>

    <div className="my-4 border-t border-dashed border-gray-300" />

    <div className="mt-auto">
      <button
        className="group/button flex items-center overflow-hidden rounded-full border-2 border-[#f96321] bg-white"
      >
        <span className="px-6 text-lg font-extrabold uppercase">
          Join Now
        </span>

        <span className="flex h-12 w-12 items-center justify-center bg-[#f96321] text-white transition group-hover/button:translate-x-1">
          <ArrowRight size={20} />
        </span>
      </button>
    </div>
  </div>
</div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="block h-40 w-full"
        >
          <path
            fill="#372fb4"
            d="
      M0,120
      C200,180 360,40 540,110
      C760,190 980,20 1200,100
      C1320,145 1380,135 1440,110
      L1440,220
      L0,220
      Z"
          />

          <path
            fill="#5146e5"
            d="
      M0,145
      C210,205 420,80 650,145
      C900,215 1100,70 1440,145
      L1440,220
      L0,220
      Z"
          />

          <path
            fill="#fbf9f4"
            d="
      M0,175
      C280,235 520,120 760,175
      C980,225 1200,135 1440,175
      L1440,220
      L0,220
      Z"
          />
        </svg>
      </div>
    </section>
  );
}
