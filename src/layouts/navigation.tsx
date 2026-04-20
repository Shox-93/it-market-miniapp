import Link from "next/link";
import Image from "next/image";

export const Navigation = () => {
  return (
    <header className="h-[56px] border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        <div className="flex items-center">
          <Link href="/" className="mr-[46px] flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="h-[30px] w-[30px]"
              priority
            />
            <span className="text-[17px] font-extrabold leading-none text-[#0f2a4a]">
              IT MARKET
            </span>
          </Link>

          <nav className="flex items-center gap-9">
            <Link
              href="/companies"
              className="text-[13px] font-semibold uppercase text-[#6f7782]"
            >
              Компании
            </Link>
            <Link
              href="/specialists"
              className="text-[13px] font-semibold uppercase text-[#6f7782]"
            >
              Специалисты
            </Link>
            <Link
              href="/vacancies"
              className="text-[13px] font-semibold uppercase text-[#6f7782]"
            >
              Вакансии
            </Link>
            <Link
              href="/orders"
              className="text-[13px] font-semibold uppercase text-[#6f7782]"
            >
              Заказы
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/register"
            className="text-[12px] font-medium uppercase text-[#6f7782]"
          >
            Зарегистрироваться
          </Link>
          <Link
            href="/login"
            className="text-[12px] font-medium uppercase text-[#6f7782]"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};