import Image from "next/image";
import { FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#291e63] text-white">
      {/* Cloud Divider */}
      

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20">
        {/* Top */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl">
            <Image 
            src={"/assets/img/logo/logo.png"}
            alt="KinderKalp"
            width={100}
            height={100}
            />

            <p className="mt-4 text-lg leading-6 text-white/90">
              KinderKalp provides a safe, fun, and nurturing environment where
              children learn, grow, explore, and build confidence through
              joyful, hands-on experiences.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/kinderkalpofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur transition hover:bg-[#f96321]"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="mailto:contact@kinderkalp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur transition hover:bg-[#f96321]"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-dashed border-white/20" />

        {/* Contact Row */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {/* Address */}
          <div>
            <p className="text-lg text-white/70">Our Address</p>

            <h4 className="mt-3 text-xl font-bold leading-relaxed">
              Kinder Kalp Preschool & Daycare,
              <br />
              Opp. Tuli Hospital, Ram Chowk,
              <br />
              Ghod Dod Road, Surat – 395001
            </h4>
          </div>

          {/* Phone */}
          <div>
            <p className="text-lg text-white/70">Call Us</p>

            <a
              href="tel:+916355269363"
              className="mt-3 block text-xl font-bold transition hover:text-[#FFD54A]"
            >
              +91 63552 69363
            </a>
          </div>

          {/* Email */}
          <div>
            <p className="text-lg text-white/70">Email</p>

            <a
              href="mailto:contact@kinderkalp.com"
              className="mt-3 inline-flex items-center gap-3 text-xl font-bold transition hover:text-[#FFD54A]"
            >
              <FaEnvelope />
              contact@kinderkalp.com
            </a>
          </div>

          {/* Instagram */}
          <div>
            <p className="text-lg text-white/70">Instagram</p>

            <a
              href="https://www.instagram.com/kinderkalpofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3 text-xl font-bold transition hover:text-[#FFD54A]"
            >
              @kinderkalpofficial
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap max-md:flex-col gap-8 text-xl font-semibold">
            {[
              "Home",
              "About Us",
              "Programs",
              "Gallery",
              "Admissions",
              "Contact Us",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="transition hover:text-[#FFD54A]"
              >
                {item}
              </a>
            ))}
          </nav>

          <p className="text-lg text-white/80">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#FFD54A]">
              Kinder Kalp Preschool & Daycare
            </span>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Grass */}
      <img
        src="/assets/img/footer/footer-shape-bottom.png"
        alt=""
        className="mt-16 w-full"
      />

      
    </footer>
  );
}
