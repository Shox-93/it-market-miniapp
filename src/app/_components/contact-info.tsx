import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapPin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function ContactInfo() {
  return (
    <aside className="h-fit rounded-[20px] bg-white px-8 py-8">
      <h2 className="mb-7 text-[22px] font-bold leading-tight text-[#1e2d3d]">
        Контактная информация
      </h2>

      <div className="space-y-3 text-[14px] text-[#1f2d3d]">
        <div className="flex items-start gap-3">
          <FaMapPin className="mt-0.75 h-3.75 w-3.75 shrink-0 text-[#1f2d3d]" />
          <span>ул. Темашка 4 Ташкент, Узбекистан</span>
        </div>

        <div className="flex items-start gap-3">
          <FaPhone className="mt-0.75 h-3.75 w-3.75 shrink-0 text-[#1f2d3d]" />
          <span>+998 71 209 11 99</span>
        </div>

        <div className="flex items-start gap-3">
          <CiMail className="mt-0.5 h-4 w-4 shrink-0 text-[#1f2d3d]" />
          <span>info@it-market.uz</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 text-[#1f2d3d]">
        <Link href="#" aria-label="Facebook" className="transition hover:opacity-70">
          <FaFacebook className="h-3.75 w-3.75" />
        </Link>
        <Link href="#" aria-label="Twitter" className="transition hover:opacity-70">
          <FaTwitter className="h-3.75 w-3.75" />
        </Link>
        <Link href="#" aria-label="LinkedIn" className="transition hover:opacity-70">
          <FaLinkedin className="h-3.75 w-3.75" />
        </Link>
        <Link href="#" aria-label="Instagram" className="transition hover:opacity-70">
          <FaInstagram className="h-3.75 w-3.75" />
        </Link>
        <Link href="#" aria-label="YouTube" className="transition hover:opacity-70">
          <FaYoutube className="h-3.75 w-3.75" />
        </Link>
      </div>
    </aside>
  );
}