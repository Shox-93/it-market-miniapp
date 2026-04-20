import Link from "next/link";

export const CompaniesHeader = () => {
  return (
    <section className="bg-[#f3f3f3] py-6">
      <div className="mx-auto max-w-285 px-3.75">
        <div className="mb-8.5 flex items-center gap-2 text-[14px]">
          <Link href="/" className="text-[#39b54a] hover:underline">
            Главная
          </Link>

          <span className="text-[#9aa4af]">/</span>

          <span className="text-[#6f7d8d]">IT-Компании Узбекистана</span>
        </div>

        <div className="flex items-center justify-between gap-10">
          <div>
            <h1 className="text-[58px] font-bold leading-[1.05] tracking-[-0.03em] text-[#102b4e]">
              IT-Компании Узбекистана
            </h1>

            <p className="mt-3 text-[16px] font-semibold uppercase text-[#7e8a97]">
              Найдите надежного исполнителя для своего проекта
            </p>
          </div>

          <Link
            href="/companies/create"
            className="inline-flex h-13.5 min-w-73.75 items-center justify-center rounded-full border border-[#f0b01e] px-8 text-[16px] font-medium uppercase text-[#f0b01e] transition hover:bg-[#f0b01e] hover:text-white"
          >
            Разместить компанию
          </Link>
        </div>
      </div>
    </section>
  );
};