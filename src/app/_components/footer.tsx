import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  
  FaTwitter,
  
  FaYoutube,
} from "react-icons/fa";

const vacanciesLinks = [
  "Разработка сайтов",
  "Разработка приложений",
  "Комплексные решения",
  "Тестирование",
  "Digital-маркетинг",
];

const specialistsLinks = [
  "Разработка сайтов",
  "Разработка приложений",
  "Комплексные решения",
  "Тестирование",
  "Digital-маркетинг",
];

const ordersLinks = [
  "Разработка сайтов",
  "Разработка приложений",
  "Комплексные решения",
  "Тестирование",
  "Digital-маркетинг",
];

export const Footer = () => {
  return (
    <footer className="bg-[#2f3034] text-white">
      <div className="mx-auto max-w-295 px-5 py-9">
        <div className="flex items-center justify-between border-b border-[#404147] pb-5.5">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt="IT Market"
              width={29}
              height={29}
              className="h-7.25 w-7.25 object-contain"
            />
            <span className="text-[18px] font-bold uppercase leading-none text-white">
              IT Market
            </span>
          </Link>

          <nav className="flex items-center gap-7 text-[14px] font-semibold uppercase leading-none">
            <Link
              href="/companies"
              className="transition-colors duration-200 hover:text-[#59d10f]"
            >
              Компании
            </Link>
            <Link
              href="/specialists"
              className="transition-colors duration-200 hover:text-[#59d10f]"
            >
              Специалисты
            </Link>
            <Link
              href="/vacancies"
              className="transition-colors duration-200 hover:text-[#59d10f]"
            >
              Вакансии
            </Link>
            <Link
              href="/orders"
              className="transition-colors duration-200 hover:text-[#59d10f]"
            >
              Заказы
            </Link>
            <Link
              href="/contacts"
              className="transition-colors duration-200 hover:text-[#59d10f]"
            >
              Связаться с нами
            </Link>
          </nav>
        </div>

        <div className="grid grid-cols-[1fr_1fr_1fr_260px] gap-13.5 pt-9">
          <div>
            <h3 className="mb-4.5 text-[16px] font-semibold leading-none text-white">
              Вакансии по специализациям
            </h3>

            <ul className="space-y-3.5 text-[15px] leading-none text-[#d3d6db]">
              {vacanciesLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition-colors duration-200 hover:text-[#59d10f]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-[16px] font-semibold leading-none text-white">
              Специалисты по специализациям
            </h3>

            <ul className="space-y-3.5 text-[15px] leading-none text-[#d3d6db]">
              {specialistsLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition-colors duration-200 hover:text-[#59d10f]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-[16px] font-semibold leading-none text-white">
              Заказы по специализациям
            </h3>

            <ul className="space-y-3.5 text-[15px] leading-none text-[#d3d6db]">
              {ordersLinks.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="transition-colors duration-200 hover:text-[#59d10f]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4.5 text-[16px] font-semibold leading-none text-white">
              Контакты
            </h3>

            <div className="space-y-3.5 text-[15px] leading-[1.45] text-[#d3d6db]">
              <p>
                <span className="font-semibold text-white">АДРЕС:</span> ул.
                Теламасчи 4, Ташкент,
                <br />
                Узбекистан
              </p>

              <p>
                <span className="font-semibold text-white">ТЕЛЕФОН:</span> +998
                71 209 11 99
              </p>

              <p>
                <span className="font-semibold text-white">ЭЛ ПОЧТА:</span>{" "}
                info@it-market.uz
              </p>
            </div>

            <div className="mt-4.5 flex items-center gap-4 text-[18px] text-[#d3d6db]">
              <Link
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-200 hover:text-[#59d10f]"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="transition-colors duration-200 hover:text-[#59d10f]"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-[#59d10f]"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-[#59d10f]"
              >
                <FaInstagram />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="transition-colors duration-200 hover:text-[#59d10f]"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8.5 border-t border-[#404147] pt-4.5 text-[14px] text-[#9ea4ab]">
          © 2026 IT Market. Все права защищены.
        </div>
      </div>
    </footer>
  );
};