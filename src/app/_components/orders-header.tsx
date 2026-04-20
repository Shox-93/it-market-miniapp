import Link from "next/link";
import OrdersTabs from "./orders-tabs";

export default function OrdersHeader({ title }: { title: string }) {
  return (
    <>
      <section className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-295 px-6 pt-6 pb-6">
          <div className="mb-4 flex items-center gap-2 text-[12px] text-[#8c8c8c]">
            <Link href="/" className="text-[#42d315]">
              Главная
            </Link>
            <span>/</span>
            <span>{title}</span>
          </div>

          <OrdersTabs />
        </div>
      </section>

      <section className="mx-auto max-w-295 px-6 pt-10">
        <h1 className="text-[48px] font-extrabold text-[#1e2d3d]">
          {title}
        </h1>

        <p className="mt-3 text-[14px] font-bold uppercase text-[#8c9aa8]">
          БАЗА ОБЪЯВЛЕНИЙ ДЛЯ ИСПОЛНИТЕЛЕЙ В СФЕРЕ IT
        </p>
      </section>
    </>
  );
}