import { Footer } from "../../_components/footer";
import OrdersTabs from "../../_components/orders-tabs";
import { GovernmentCatalog } from "./government-catalog";
import Link from "next/link";

export default function GovernmentOrdersPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3]">
        <section className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-295 px-6 pt-6 pb-6">
            <div className="mb-4 flex items-center gap-2 text-[12px] text-[#8c8c8c]">
              <Link href="/" className="text-[#42d315]">
                Главная
              </Link>
              <span>/</span>
              <span>Тендер</span>
            </div>

            <OrdersTabs />
          </div>
        </section>

        <GovernmentCatalog />
      </main>

      <Footer />
    </>
  );
}