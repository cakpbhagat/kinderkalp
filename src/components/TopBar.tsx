import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="topbar topbar-container max-md:hidden flex-1 max-w-full justify-between relative bg-[#f96321] text-white">
      <div className="mx-auto flex h-16 max-w-full items-center justify-between px-6 lg:px-12">
        {/* Left */}
        <div className="flex items-center gap-6">
          <div className="flex items-center">
          <a
            href="tel:+916355269363"
            className="flex items-center gap-2 transition hover:text-orange-100"
          >
            <FaPhoneAlt className="text-sm" />
            <span>+91 63552 69363</span>
          </a>
        </div>

          <span className="text-white/70 text-xl">/</span>

          <a
            href="mailto:contact@kinderkalp.com"
            className="flex items-center gap-2 hover:text-orange-100 transition"
          >
            <FaEnvelope className="text-sm" />
            <span>contact@kinderkalp.com</span>
          </a>
        </div>

        {/* Center */}
        <div className="max-xl:hidden text-center font-semibold text-base">
          <span>A Safe, Joyful Place for Little Learners — </span>

          <Link
            href="/about"
            className="font-bold underline underline-offset-4 hover:text-orange-100"
          >
            Learn More
          </Link>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="font-bold">Follow Us:</span>

          <SocialIcon
            href="https://www.instagram.com/kinderkalpofficial"
            icon={<FaInstagram />}
          />
        </div>
      </div>

      

      
    </div>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex h-7 w-7 items-center justify-center rounded-full transition hover:scale-110 border border-white"
    >
      {icon}
    </a>
  );
}
