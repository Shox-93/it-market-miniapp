import Link from "next/link";

export const SpecialistsHeader = () => {
  return (
    <section className="bg-[#f3f3f3] py-[24px] shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-[1140px] px-[15px]">
        <div className="mb-[28px] flex items-center gap-[8px] text-[14px]">
          <Link href="/" className="text-[#39b54a] hover:underline">
            Главная
          </Link>

          <span className="text-[#9aa4af]">/</span>

          <span className="text-[#6f7d8d]">IT-специалисты</span>
        </div>

        <div className="flex items-center justify-between gap-10">
          <div>
            <h1 className="text-[44px] font-bold leading-[1.08] tracking-[-0.02em] text-[#102b4e]">
              IT-специалисты
            </h1>

            <p className="mt-[10px] text-[13px] font-semibold uppercase text-[#7e8a97]">
              Найдите специалистов, которые находятся в поиске работы или задач
            </p>
          </div>

          <Link
            href="/specialists/create"
            className="inline-flex h-[40px] min-w-[178px] items-center justify-center rounded-full border border-[#f0b01e] px-[24px] text-[12px] font-medium uppercase text-[#f0b01e] transition hover:bg-[#f0b01e] hover:text-white"
          >
            Разместить резюме
          </Link>
        </div>
      </div>
    </section>
  );
};