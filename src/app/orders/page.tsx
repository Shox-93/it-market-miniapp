import { Footer } from "../_components/footer";
import OrdersHeader from "../_components/orders-header";
import { OrdersCatalog } from "./orders-catalog";
import { getOrders } from "@/lib/api";

export default async function OrdersPage() {
  const orders = await getOrders();

  return (
    <>
      <main className="min-h-screen bg-[#f3f3f3]">
        <OrdersHeader title="Заказы" />

        <div className="mx-auto max-w-285 px-6 py-6">
          <OrdersCatalog orders={orders} />
        </div>
      </main>

      <Footer />
    </>
  );
}