import { OrderCard } from "./order-card";
import { OrderBanner } from "./order-banner";

type Order = {
  id: number;
  title: string;
  company?: string;
  customerType?: string;
  budget?: string;
  start?: string;
  end?: string;
  tags?: string[];
};

type Props = {
  orders: Order[];
};

export const OrdersSection = ({ orders }: Props) => {
  return (
    <section className="bg-[#f3f3f3] py-20">
      <div className="mx-auto max-w-265 px-6">
        <div className="mb-10 flex flex-col items-center">
          <h2 className="text-[28px] font-extrabold text-[#111827]">
            IT-заказы
          </h2>

          <button
            type="button"
            className="mt-3 rounded-full bg-[#f2b400] px-5 py-2 text-[12px] font-bold uppercase text-white"
          >
            Разместить заказ
          </button>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <OrderBanner />
        </div>
      </div>
    </section>
  );
};